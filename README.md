# Crema App - Web ๐

[![Build Status](https://github.com/cremalab/crema-app-web/workflows/CI/badge.svg)](https://github.com/cremalab/crema-app-web/actions)
[![codecov](https://codecov.io/gh/cremalab/app-web/branch/develop/graph/badge.svg?token=8epVUIKnmy)](https://codecov.io/gh/cremalab/app-web)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project includes configuration and tooling that conforms to Crema's baseline best-practices for a Web Application.

**๐งฐ Tools Used**

- [Create React App](https://facebook.github.io/create-react-app/) for simple configuration ๐
- [Cypress](https://www.cypress.io) for end-to-end testing
- [ESLint](https://eslint.org) for code linting
- [Husky](https://github.com/typicode/husky/tree/master) for running tasks via git hooks (locked at v4 due to [v5 licensing](https://typicode.github.io/husky/#/?id=announcement))
- [Hygen](http://www.hygen.io) for component and util generators
- [Jest](https://jestjs.io) for unit tests
- [Loki](https://loki.js.org) for visual testing
- [Prettier](https://prettier.io) for code formatting (๐จ DO NOT enable the VS Code Prettier pluginโESLint runs it for you under the hood. ๐)
- [Storybook](https://storybook.js.org) for component playground (and used by Loki)
- [TypeScript](http://www.typescriptlang.org) for Static Typing in JavaScript ([Learn](http://www.typescriptlang.org/docs/handbook/basic-types.html))

## ๐ Setup

> Run these commands from project root.

1. [Install NVM](https://github.com/creationix/nvm#installation-and-update) (Node Version Manager)
2. `nvm install` (in new sessions run `nvm use` to load version specified in `.nvmrc` unless aliased to default)
3. `npm i -g npm@latest` (npm@v7+ required)
4. `npm i` (install project dependencies)
5. [Install the ESLint plugin for ~~your editor~~ VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and enable "Fix on Save" in `settings.json`:
   ```json
   {
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     }
   }
   ```
   > Go to settings (`โ + ,`), search `codeActionsOnSave` and click "Edit in settings.json", then add `"editor.codeActionsOnSave": {...}` within the existing JSON object.
   >
   > "But I don't use VS Code." That's fine but you're on your own. ๐
   >
   > ๐จ DO NOT enable the VS Code Prettier plugin for this projectโESLint runs it for you under the hood. ๐
6. [Install Docker Desktop](https://www.docker.com/products/docker-desktop
   1. Used by [Loki](https://loki.js.org) which runs on git pre-push hook via [Husky](https://github.com/typicode/husky/tree/master)

## ๐ Run

Run the following scripts with `npm run <SCRIPT_HERE>`:

- `start` - start app
- `new:component` - generate a new component
- `new:util` - generate a new util(ity)
- `test:analyze` - run bundle analyzer
- `test:deps` - run dependency validation tests
- `test:e2e` - run end-to-end tests
- `test:lint:fix` - run linter and fix if possible
- `test:lint` - run linter
- `test:playground` - run component playground (storybook)
- `test:unit:coverage` - run unit tests with coverage
- `test:unit` - run unit tests
- `test:visual:approve` - approve visual changes
- `test:visual:update` - update or create visual references
- `test:visual` - run visual tests (loki)
- `deps:graph` - run dependency validation and generate an SVG representing the dependency graph (requires [`graphviz`](https://graphviz.org/) to be installed on your device)
- `deps:report` - run dependency validation and generate an HTML report

> These scripts are located in `package.json` and do not represent the entirety of available scripts, but are the most commonly used.

## ๐ Structure

Below is the project's file-tree with notes added as inline comments.

> Uninteresting info is denoted by `...`

```bash
.
โโโ .github # ๐ PR/Issue Templates, workflows, and Renovate config
โโโ .loki # ๐ Loki provides visual regression testing of Storybook files
โย?ย? โโโ current # ๐ Images from current test run
โย?ย? โย?ย? โโโ chrome_App_Example.png
โย?ย? โโโ difference # ๐ Differences from current test run
โย?ย? โโโ reference # ๐ Approved reference images
โย?ย? โย?ย? โโโ chrome_App_Example.png
โย?ย? โโโ .gitignore # ๐ `./current` and `./difference` are not tracked
โโโ .storybook # ๐ Storybook config
โโโ cypress # ๐ Cypress integration testing
โย?ย? โโโ fixtures # ๐ Test data
โย?ย? โย?ย? โโโ example.json
โย?ย? โโโ integration # ๐ Tests go here
โย?ย? โย?ย? โโโ sample_spec.ts
โย?ย? โโโ ...
โโโ public # ๐ Static files
โโโ src 
โย?ย? โโโ assets # ๐ fonts, images, etc.
โย?ย? โย?ย? โโโ logo.svg
โย?ย? โโโ components # ๐  Use `npm run new:component` to generate
โย?ย? โย?ย? โโโ App
โย?ย? โย?ย? โย?ย? โโโ README.md # ๐  Every component has a README
โย?ย? โย?ย? โย?ย? โโโ index.tsx # ๐  Contains main implementation
โย?ย? โย?ย? โย?ย? โโโ stories.tsx # ๐  Component stories; use `npm run test:playground` to run
โย?ย? โย?ย? โย?ย? โโโ styles.css # ๐  Component styles (not included in generated code)
โย?ย? โย?ย? โย?ย? โโโ test.tsx # ๐  Component tests; use `npm run test:unit` to run
โย?ย? โย?ย? โโโ README.md # ๐  Every top-level directory in `src` has a README.md
โย?ย? โโโ types # ๐  Type definitions go here; use `npm run new:type` to generate
โย?ย? โย?ย? โโโ README.md
โย?ย? โโโ utils # ๐  Utilities go here; use `npm run new:util` to generate
โย?ย? โย?ย? โโโ README.md
โย?ย? โโโ index.css # ๐  Root styles
โย?ย? โโโ index.tsx # ๐  Root application file
โย?ย? โโโ react-app-env.d.ts # ๐  Extends react-scripts TypeScript definitions
โย?ย? โโโ reportWebVitals.ts # ๐  Useful, but not required
โย?ย? โโโ serviceWorker.ts # ๐  Useful, but not required
โย?ย? โโโ setupTests.ts # ๐  Top-level setup for Jest test runs
โโโ .dependency-cruiser.js # ๐  Dependency Cruiser config
โโโ .eslintrc.js # ๐  ESLint - Run Commands
โโโ .gitattributes # ๐  Git meta information
โโโ .gitignore # ๐  Git ignore patterns
โโโ .nvmrc # ๐  Node Version Manager - Run Commands
โโโ .prettierrc.js # ๐  Prettier - Run Commands
โโโ LICENSE # ๐  LICENSE ๐
โโโ README.md # ๐ ๐ ๐  YOU ARE HERE
โโโ cypress.json # ๐  Cypress config
โโโ package-lock.json
โโโ package.json
โโโ tsconfig.json # ๐  TypeScript config and extends
```

## ๐ฅ Best Practices

- Use the code generators:
  - `npm run new:component`
  - `npm run new:type`
  - `npm run new:util`
- Fill out the `README.md` to describe what your code does
- Run your unit tests `npm run test:unit` while working to see immediate feedback
- If you get stuck at any point, just log an issue and we'll figure it out together ๐ญ.
