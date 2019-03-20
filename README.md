# Monorepo + TypeScript + Next.js: The Sane Way

This repo is an experiment to set-up a monorepo for a Next.js project using modules located in other directories. Everything is not perfect and "real-world" ready, but it should be a good first step.

- **Strict TypeScript**: potential bugs are not an option
- **Transpiled server-side code**: needed if you are going to re-use modules for both client and server-side
- **Jest** support
- **One TypeScript config to rule them all**: consistency first
- **One TSLint config to rule them all**: no need to be masochist
- **One Jest config to rule them all**: keep things sane (you can filter tests by Regex anyway)
- **Transpile local modules** with Next.js on-demand

## More in details

### TypeScript

TypeScript is installed at the root of the monorepo. This means one version of TypeScript for all your sub-projects.

Its config is at the root: `<root>/tsconfig.json`.

### Jest

Unit tests should be put in `__tests__` folders to match the Jest philosophy and not pollute your directories too much.

The config is at the root: `<root>/jest.config.js` and all your tests can be run with `npm run test:unit` in the root folder (you can filter them with the usual jest arguments if you want).

### TSLint

Again, one TSLint for all, at the root.

Linting can be checked by running `npm run lint:ts` in the root folder. Use the config you want in `<root>/tslint.json`. The default uses semistandard.

### Root folder

Put everything you want there, a Next app, shared code, a react-native app, a CRA, even Wordpress if you want.

### Next.js and local modules

Next.js will transpile modules thanks to the [`next-transpile-modules`](https://github.com/martpie/next-transpile-modules) package. Transpiled modules can be changed by editing the `transpileModules` option in `website/next.config.js`.

This setup works thanks to npm symlinking local dependencies in `website/`'s `node_modules` folder. Yarn workspaces would work as well (though requiring some adaptation from this bolerplate).

## To-do

- [ ] Different Types definitions per projects: a definition Type for a website may not be shared with a react-native app for example (global types are currently shared across modules)
- [ ] Move to eslint-typescript
