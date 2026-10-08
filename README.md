# rd-personal-website

A small React + Vite starter for Rohit's personal website, inspired by the simple typography and nested lists at https://nat.org. Includes About, Values, and Cooking sections. All bracketed copy is intentionally a placeholder.

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

The production website is generated in `dist/`. This project has no backend, account system, analytics, or external font requests. Content changes are made in the source files; hosting is configured through Sites in `.openai/hosting.json`.
