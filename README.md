# Портфолио - Unity Developer (WIP)

Личный сайт-портфолио Junior Unity Developer с инженерным уклоном.
Статический сайт на чистом HTML/CSS/JavaScript (без сборщиков и фреймворков),
готовый к размещению на GitHub Pages.

Текущая версия сайта может отображать некорректную mock-информацию, которая была сгенерирована нейросетью. Проект в процессе разработки.

🔗 **Живой сайт:** https://pikus12345.github.io/

## Стек

- HTML5 (семантическая разметка)
- CSS3 (переменные, Grid, Flexbox, keyframe-анимации)
- Vanilla JavaScript (ES6-модули, Intersection Observer)
- Google Fonts: Inter, JetBrains Mono

## Структура проекта

```
/
├── index.html                     # главная страница
├── css/style.css                  # все стили
├── js/main.js                     # навигация, скролл, анимации
├── js/projects.js                 # данные проектов и рендер карточек
├── assets/images/                 # изображения (hero-фон и т.д.)
├── assets/icons/                  # иконки
├── assets/diagrams/mvc-diagram.svg# схема архитектуры MVC
├── projects/inquisitor-webgl/     # WebGL-билд игры "Инквизитор"
├── .github/workflows/deploy.yml   # автодеплой на GitHub Pages
├── robots.txt
├── sitemap.xml
└── .gitignore
```

## Локальный запуск

Сайт не требует сборки — достаточно открыть `index.html` в браузере,
либо поднять локальный статический сервер (рекомендуется из-за ES-модулей,
которые не грузятся по протоколу `file://` в некоторых браузерах):

```bash
# Python 3
python -m http.server 8080

# или Node.js (npx)
npx serve .
```

Затем откройте `http://localhost:8080`.

## Деплой на GitHub Pages

Деплой настроен автоматически через GitHub Actions (`.github/workflows/deploy.yml`):

1. Запушьте изменения в ветку `main` (или `master`).
2. Workflow **Deploy to GitHub Pages** соберёт и опубликует содержимое корня репозитория.
3. В настройках репозитория **Settings → Pages** укажите источник **GitHub Actions**.
4. Сайт будет доступен по адресу `https://<ваш_аккаунт>.github.io/<имя_репозитория>/`.

Ручной запуск деплоя также возможен из вкладки **Actions → Deploy to GitHub Pages → Run workflow**.

## Добавление WebGL-билда (проект «Инквизитор»)

1. В Unity: **File → Build Settings → Platform → WebGL → Switch Platform**.
2. **Build** и выберите папку `projects/inquisitor-webgl/` в этом репозитории
   (замените содержимое папки, включая плейсхолдерный `index.html`).
3. Убедитесь, что итоговая структура выглядит так:
   ```
   projects/inquisitor-webgl/
   ├── index.html
   ├── Build/
   └── TemplateData/
   ```
4. Закоммитьте и запушьте изменения — билд станет доступен на странице проекта «Инквизитор».

## Замена контента

Перед публикацией замените плейсхолдеры на реальные данные:

- `index.html` — имя, слоган, описание, ссылки на GitHub/Telegram/Freelance/Email
- `js/projects.js` — ссылки на реальные репозитории проектов
- `assets/images/hero-bg.jpg` — фоновое изображение hero-секции
- YouTube `VIDEO_ID` в секции проекта «Сердце Урала» — на реальный ID видео

## Лицензия

Контент и код доступны для свободного использования как референс. Замените
персональные данные перед публикацией под своим именем.
