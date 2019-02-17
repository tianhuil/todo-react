# Webpack React Typescript Starter

A simple typescript react starter for webpack.  Works well for starter pages that can be hosted on github.

## Using the Starter
To use the starer:

1. [Fork your own copy of the repo](https://help.github.com/articles/fork-a-repo/) and clone your copy:
  ```bash
  > git clone git@github.com:[Your User Id]/webpack-react-typescript-starter.git
  ```
2. Install the dependencies
  ```bash
  > npm install
  ```
3. Boot up dev server
  ```bash
  > npm start
  ```
4. Edit your code (configured well for [vscode](https://code.visualstudio.com/))
5. Build production:
  ```bash
  > npm build
  ```
6. You can optionally host the production build by running
```bash
> npm run live-server
```
7. You can then host your results [on github as a static page](https://pages.github.com/).

## The important files
- `package.json`
- `webpack.config.js`
- `src/`
- `dist/`

## Optional files
- `.editorconfig`
- `tsconfig.json`

## Origins
- [This article](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/#webpack-react-setup) forms the basis and provides support for webpack, babel, react, hot module replacement, and the general setup under `src/` and `dist/`.
- Used [this README](https://github.com/Microsoft/TypeScript-Babel-Starter) to configure babel typescript.
- The [following SO article](https://stackoverflow.com/questions/36510627/cant-import-typescript-modules-without-providing-the-file-extension) explains how to import from tsx by setting the correct order of the resolve field in `webpack.config.js`.
- [This article](https://medium.com/a-beginners-guide-for-webpack-2/using-sass-9f52e447c5ae) and [the sass-loader README](https://github.com/webpack-contrib/sass-loader) define how to load `scss` files.

