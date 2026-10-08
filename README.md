# om — скрипты сайта oleksandrmaskymov.webflow.io

Весь JS сайта. Пишется модулями в `src/`, GitHub Actions собирает их в `dist/app.js`,
сайт грузит его через jsDelivr.

## Подключение в Webflow (Site Settings → Footer)

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/Flip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/SplitText.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/CustomEase.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.26/dist/lenis.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@barba/core@2/dist/barba.umd.js"></script>
<script src="https://cdn.jsdelivr.net/gh/oleksandrmaksymov/om@main/dist/app.js"></script>
```

## Структура

```
src/
├── main.js              ← точка входа: Barba и порядок запуска
├── pages.js             ← какие модули запускаются на странице
├── core/                ← GSAP-плагины, Lenis, загрузка скриптов, жизненный цикл
├── global/              ← nav (вне Barba-контейнера): меню, heading-link, текущая ссылка, Webflow
├── modules/             ← по файлу на эффект: axion, flip, loader, split-text, курсоры, сетка…
└── transitions/cube.js  ← переход между страницами
```

Каждый модуль: `initX(scope)` → возвращает функцию `cleanup`, которая всё останавливает
при уходе со страницы.

## Как править

1. Открыть нужный файл в `src/`, нажать ✏️, изменить, Commit.
2. Через ~1 минуту GitHub Actions пересоберёт `dist/app.js` и сбросит кэш jsDelivr.
3. Перепубликовывать Webflow не нужно.

Новый эффект: файл в `src/modules/` + строка в `src/pages.js`.
Откат: History → нужный commit → Revert.
