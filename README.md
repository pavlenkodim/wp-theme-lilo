# LILO - Wordpreess page for Foxdigital theme

## Для того чтобы установить это страницу в вашу тему Foxdigital, вам нужно:

1. Склонировать с этого репозитория ветку `page` командой

```bash
git clone -b page https://github.com/pavlenkodim/wp-theme-lilo.git
```

У вас появится папка `wp-theme-lilo`.

2. Скопировать содержимое папки `wp-theme-lilo` в корневую папку вашей темы.
3. В Административной панели Wordpress установить создать страницу с названием "Lilo" и выбрать шаблон "Lilo".
4. Запустить сайт и проверить работоспособность страницы.
5. Проверьте путь для изображения `Smoke-Element.png` в файле `lilo/js/smoke.js`

[lilo/js/smoke.js](lilo/js/smoke.js#L53)

```js
let smokeTexture = textureLoader.load(
  "/wp-content/themes/foxdigital/lilo/img/Smoke-Element.png"
);
```

**(!) Не забудьте удалить этот `README.md`, `.gitignore` и папку `.git` вместе с папкой `wp-theme-lilo` после установки**

> PS. Если вы используете эту страницу без темы Foxdigital, то вам нужно будет в ручную настроить пути для загрузки некоторых скриптов. Все необходимые скрипты и другие файлы находятся в папке `lilo/js`, `lilo/css` и `lilo/img`.

---

English version

# LILO - WordPress page for Foxdigital theme

## To install this page in your Foxdigital theme, you need to:

1. Clone the `page` branch from this repository using the command

```bash
git clone -b page https://github.com/pavlenkodim/wp-theme-lilo.git
```

You will have a folder named `wp-theme-lilo`.

2. Copy the contents of the `wp-theme-lilo` folder to the root folder of your theme.
3. In the WordPress Admin panel, create a page titled "Lilo" and select the "Lilo" template.
4. Launch the site and check the functionality of the page.
5. Check the path for the image `Smoke-Element.png` in the file `lilo/js/smoke.js`

[lilo/js/smoke.js](lilo/js/smoke.js#L53)

```js
let smokeTexture = textureLoader.load(
  "/wp-content/themes/foxdigital/lilo/img/Smoke-Element.png"
);
```

**(!) Don't forget to delete this `README.md`, `.gitignore`, and the `.git` folder after installation**

> PS. If you are using this page without the Foxdigital theme, you will need to manually configure the paths for loading some scripts. All necessary scripts and other files are located in the `lilo/js`, `lilo/css`, and `lilo/img` folders.
