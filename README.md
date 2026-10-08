# rd

Inspired by https://nat.org. (Did you peep the irony?)

## Run locally

Use Node 24 (or Node 22.12+). If you use nvm, run `nvm use` first.

```sh
npm install
npm run dev
```

Open the local address printed in the terminal. Edits update the page automatically.

## Add your content

- `src/content.js`: your name, optional introduction, section headings, and bullet points. Add nested `children` for supporting thoughts or cooking notes. Give an item an `href` to make it a link. Delete any unused placeholders.
- `src/styles.css`: fonts, colors, width, and spacing.
- `src/App.jsx`: layout and reusable nested-list component.
- `index.html`: browser title and search description.
- `public/`: future photos or other static files; reference a photo as `/photo.jpg` from a component.

Example item:

```js
{ text: 'Your dish or value', children: [{ text: 'Your supporting note' }] }
```

Example link:

```js
{ text: 'A favorite recipe', href: 'https://example.com/recipe' }
```

## Build

```sh
npm run build
npm run preview
```

The production website is generated in `dist/`. This project has no backend, account system, analytics, or external font requests. Content changes are made in the source files; the original Sites hosting configuration is retained in `.openai/hosting.json`.

## GitHub Pages

The website is named **rd**. Repository: https://github.com/rohitdas2/rd

GitHub Pages serves the committed `docs/` folder from `main`. To publish future content edits:

```sh
npm run build:pages
git add src index.html docs
git commit -m "Update website"
git push origin main
```

Rebuild before pushing so the published files match your source. `npm run build` still creates the local `dist/` build. The local folder remains `rd-personal-website`.
