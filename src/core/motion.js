/* ======================================================
   MOTION — one timing for loader, mobile menu and page transition
   ====================================================== */

/* Плавность (cubic-bezier) и скорость (сек).
   Используются: переход между страницами, уезжание фона лоадера,
   открытие/закрытие фона мобильного меню (через CSS-переменные ниже). */
const PAGE_BEZIER = '0.7, 0.05, 0.13, 1';
export const PAGE_DURATION = 0.9;

CustomEase.create('parallax', PAGE_BEZIER);
export const PAGE_EASE = 'parallax';

/* Same values for CSS: var(--page-ease), var(--page-duration) */
document.documentElement.style.setProperty('--page-ease', 'cubic-bezier(' + PAGE_BEZIER + ')');
document.documentElement.style.setProperty('--page-duration', PAGE_DURATION + 's');
