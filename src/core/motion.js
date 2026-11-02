/* ======================================================
   MOTION — one timing for loader, mobile menu and page transition
   ====================================================== */

/* Плавность (cubic-bezier) и скорость (сек).
   Используются: переход между страницами, первая загрузка,
   уезжание фона лоадера, шторка мобильного меню. */
const PAGE_BEZIER = '0.7, 0.05, 0.13, 1';
export const PAGE_DURATION = 0.9;

CustomEase.create('parallax', PAGE_BEZIER);
export const PAGE_EASE = 'parallax';

/* Насколько темнеет уходящая страница (и шторка меню при переходе), 0…1 */
export const PAGE_DARK = 0.8;
