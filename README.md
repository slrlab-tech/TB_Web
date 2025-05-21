# TB_Web

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### To deploy to github [TB_Web](https://slrlab-tech.github.io/TB_Web/)

```sh
npm run build
```

Push it to main, then it need to be pushed to `gh-pages`, as the site is hosted on that sub branch

```sh
git subtree push --prefix dist origin gh-pages
```

Check Action on github, and until it is ready.

### API calls to OSS alibaba

An access key pair is needed to write/read data from OSS with src/utils/oss.ts
The key can be found in Resource Access Management in Alibaba Cloud (RAM-Identities-Users). The user name is web.
The key need to be store in .env in root

```
VITE_OSS_ACCESS_KEY_ID=
VITE_OSS_ACCESS_KEY_SECRET=
```
