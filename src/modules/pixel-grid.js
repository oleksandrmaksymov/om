/* ======================================================
   INFO PAGE — Interactive Pixel Grid
   ====================================================== */
export const GRID_LIFE = 0.6;

export function debounce(func, wait) {
  let timeout;
  const fn = function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
  fn.cancel = function() { clearTimeout(timeout); };
  return fn;
}

export function initGrid(el) {
  const defaults = {
    gridBackground: "#FFFFFF",
    gridSizeDesktop: 20,
    gridSizeMobile: 8,
    gridBorderSize: 2,
    gridBorderColor: "#E5E5E5",
    gridColors: ["#000000", "#333333", "#5A5A5A", "#858585", "#B2B2B2", "#CCCCCC", "#E5E5E5"]
  };

  const gridBackground = el.getAttribute("data-grid-background") || defaults.gridBackground;
  const gridSizeDesktop = parseInt(el.getAttribute("data-grid-size-desktop")) || defaults.gridSizeDesktop;
  const gridSizeMobile = parseInt(el.getAttribute("data-grid-size-mobile")) || defaults.gridSizeMobile;
  const gridBorderSize = parseFloat(el.getAttribute("data-grid-border-size")) || defaults.gridBorderSize;
  const gridBorderColor = el.getAttribute("data-grid-border-color") || defaults.gridBorderColor;

  let gridColors = defaults.gridColors;
  const attrColors = el.getAttribute("data-grid-colors");
  if (attrColors) {
    try {
      gridColors = JSON.parse(attrColors.replace(/'/g, '"'));
    } catch (e) {
      const parsed = attrColors
        .replace(/^\s*\[|\]\s*$/g, "")
        .split(/,(?![^(]*\))/)
        .map(c => c.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
      if (parsed.length) gridColors = parsed;
    }
  }

  el.style.backgroundColor = gridBackground;

  const pad = gridBorderSize / 2;
  const canvas = document.createElement("canvas");
  canvas.style.display = "block";
  canvas.style.margin = -pad + "px";
  el.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  function toRGB(color) {
    ctx.fillStyle = "#000";
    ctx.fillStyle = color;
    const c = ctx.fillStyle;
    if (c[0] === "#") {
      return [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)];
    }
    const m = c.match(/[\d.]+/g);
    return [+m[0], +m[1], +m[2]];
  }

  function colorAt(stops, p) {
    const seg = Math.min(p, 1) * (stops.length - 1);
    const i = Math.min(Math.floor(seg), stops.length - 2);
    const t = seg - i;
    const a = stops[i], b = stops[i + 1];
    return "rgb(" +
      Math.round(a[0] + (b[0] - a[0]) * t) + "," +
      Math.round(a[1] + (b[1] - a[1]) * t) + "," +
      Math.round(a[2] + (b[2] - a[2]) * t) + ")";
  }

  const paletteRGB = gridColors.map(toRGB);
  const cellStops = paletteRGB.concat([toRGB(gridBackground)]);
  const lineStops = paletteRGB.concat([toRGB(gridBorderColor)]);

  let cols, rows, dpr, w, h;
  let lineX = [];
  let lineY = [];
  let blocks = [];
  let lastHoveredIndex = null;
  let pointerX = null;
  let pointerY = null;
  let now = 0;
  let rafId = null;

  function snap(v) {
    const half = (Math.round(gridBorderSize * dpr) % 2) ? 0.5 : 0;
    return (Math.round(v * dpr - half) + half) / dpr;
  }

  function setupGrid() {
    const rect = el.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
    dpr = window.devicePixelRatio || 1;

    const cw = w + pad * 2;
    const ch = h + pad * 2;
    canvas.width = Math.round(cw * dpr);
    canvas.height = Math.round(ch * dpr);
    canvas.style.width = cw + "px";
    canvas.style.height = ch + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    cols = (window.innerWidth < 768) ? gridSizeMobile : gridSizeDesktop;
    const cellW = w / cols;
    rows = Math.max(1, Math.round(h / cellW));
    const cellH = h / rows;

    lineX = [];
    lineY = [];
    for (let i = 0; i <= cols; i++) lineX.push(snap(pad + i * cellW));
    for (let j = 0; j <= rows; j++) lineY.push(snap(pad + j * cellH));

    blocks = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        blocks.push({ col: x, row: y, start: -Infinity });
      }
    }
    lastHoveredIndex = null;
  }

  function progress(b) {
    return (now - b.start) / (GRID_LIFE * 1000);
  }

  function isActive(index) {
    return progress(blocks[index]) < 1;
  }

  function checkHover() {
    if (pointerX === null || !lineX.length) return;
    const rect = canvas.getBoundingClientRect();
    const px = pointerX - rect.left;
    const py = pointerY - rect.top;

    let col = -1, row = -1;
    for (let i = 0; i < cols; i++) { if (px >= lineX[i] && px < lineX[i + 1]) { col = i; break; } }
    for (let j = 0; j < rows; j++) { if (py >= lineY[j] && py < lineY[j + 1]) { row = j; break; } }

    if (col === -1 || row === -1) {
      lastHoveredIndex = null;
      return;
    }

    const hoveredIndex = row * cols + col;
    if (hoveredIndex === lastHoveredIndex) return;
    lastHoveredIndex = hoveredIndex;

    blocks[hoveredIndex].start = now;
  }

  function draw(time) {
    now = time || performance.now();
    checkHover();

    ctx.clearRect(0, 0, w + pad * 2, h + pad * 2);

    ctx.strokeStyle = gridBorderColor;
    ctx.lineWidth = gridBorderSize;
    ctx.beginPath();
    lineX.forEach(x => { ctx.moveTo(x, 0); ctx.lineTo(x, h + pad * 2); });
    lineY.forEach(y => { ctx.moveTo(0, y); ctx.lineTo(w + pad * 2, y); });
    ctx.stroke();

    const active = [];
    blocks.forEach((b, i) => { if (progress(b) < 1) active.push(i); });
    active.sort((a, b) => blocks[a].start - blocks[b].start);

    active.forEach(i => {
      const b = blocks[i];
      const p = Math.max(0, progress(b));

      const leftN = b.col > 0 && isActive(i - 1);
      const rightN = b.col < cols - 1 && isActive(i + 1);
      const topN = b.row > 0 && isActive(i - cols);
      const bottomN = b.row < rows - 1 && isActive(i + cols);

      const L = lineX[b.col] - (leftN ? 0 : pad);
      const R = lineX[b.col + 1] + (rightN ? 0 : pad);
      const T = lineY[b.row] - (topN ? 0 : pad);
      const B = lineY[b.row + 1] + (bottomN ? 0 : pad);

      ctx.fillStyle = colorAt(lineStops, p);
      ctx.fillRect(L, T, R - L, B - T);

      const iL = lineX[b.col] + pad, iR = lineX[b.col + 1] - pad;
      const iT = lineY[b.row] + pad, iB = lineY[b.row + 1] - pad;
      ctx.fillStyle = colorAt(cellStops, p);
      ctx.fillRect(iL, iT, iR - iL, iB - iT);
    });

    rafId = requestAnimationFrame(draw);
  }

  function supportsTouch() {
    return "ontouchstart" in window || navigator.maxTouchPoints;
  }

  const onPointerMove = (e) => {
    pointerX = e.clientX;
    pointerY = e.clientY;
  };
  const onMouseLeave = () => {
    pointerX = null;
    pointerY = null;
    lastHoveredIndex = null;
  };
  const onResize = debounce(setupGrid, 200);

  const touch = supportsTouch();
  if (!touch) {
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
  }
  window.addEventListener("resize", onResize);

  setupGrid();
  rafId = requestAnimationFrame(draw);

  return function() {
    cancelAnimationFrame(rafId);
    onResize.cancel();
    if (!touch) {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    }
    window.removeEventListener("resize", onResize);
    canvas.remove();
  };
}

export function initGrids(scope) {
  const cleanups = [...scope.querySelectorAll("[data-grid]")].map(initGrid);
  if (!cleanups.length) return;
  return function() { cleanups.forEach(fn => fn()); };
}
