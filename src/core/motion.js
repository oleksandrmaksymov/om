/* ======================================================
   MOTION — shared timing for page transition and loader
   ====================================================== */
CustomEase.create('parallax', '0.7, 0.05, 0.13, 1');

/* Скорость и плавность перехода между страницами.
   Лоадер (уезжание чёрного фона) использует те же значения. */
export const PAGE_EASE = 'parallax';
export const PAGE_DURATION = 0.9;
