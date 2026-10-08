Весь JS сайта. Пишется модулями в `src/`, GitHub Actions собирает их в `dist/app.js`,
сайт грузит его через jsDelivr.


src/
├── main.js              ← точка входа: Barba и порядок запуска
├── pages.js             ← какие модули запускаются на странице
├── core/                ← GSAP-плагины, Lenis, загрузка скриптов, жизненный цикл
├── global/              ← nav (вне Barba-контейнера): меню, heading-link, текущая ссылка, Webflow
├── modules/             ← по файлу на эффект: axion, flip, loader, split-text, курсоры, сетка…
└── transitions/crossfade.js ← переход между страницами (Osmo Cross Fade)
```


1. Открыть нужный файл в `src/`, нажать ✏️, изменить, Commit.
2. Через ~1 минуту GitHub Actions пересоберёт `dist/app.js` и сбросит кэш jsDelivr.
3. Перепубликовывать Webflow не нужно.

Новый эффект: файл в `src/modules/` + строка в `src/pages.js`.
Откат: History → нужный commit → Revert.
