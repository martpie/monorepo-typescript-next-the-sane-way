# Monorepo + TypeScript + Next.js: The Sane Way

This repo is an experiment to set-up a monorepo for a Next.js project using modules located in other directories. Everything is not perfect and "real-world" ready, but it should be a good first step.

- **Strict TypeScript**: potential bugs are not an option
- ~~**Transpiled server-side code**: needed if you are going to re-use modules for both client and server-side~~ Not anymore, Next.js is plenty powerful now and does not need it anymore in 99% of the cases
- **Jest**
- **TypeScript**
- **ESLint** (now included in Next.js 10)
- **Transpile local packages** with Next.js on-demand + HMR

My approach completely changed after a couple of projects, I realised the previous approach of having common configuration files was a bad practice:

- Not a true monorepo where every subfolder is a separate app
- Difficult to deploy and test on CI

Now, configuration files are repeated in each sub-folders, which means you need to be more careful regarding config and dependencies versions, but things are much easier to manage for developers and text editors.

## Todos

- [ ] GitHub actions sample
- [ ] ESLint + Jest everywhere

## More in details

### TypeScript

The config is at the root of each project: `<root>/<sub-project>/tsconfig.json`.

### Unit-tests

Jest is used for unit tests and all test files should be put in `__tests__` folders to match the Jest philosophy and not pollute your directories too much.

The config is at the root of each project: `<root>/<sub-project>/jest.config.js` and all the tests can be run with `npm run test:unit` in each folder.

### Linting

`npm run test:lint`

### Root folder

Put everything you want there, a Next app, shared code, a react-native app, a CRA, even Wordpress if you want.

### Next.js and local modules

Next.js will transpile modules thanks to the [`next-transpile-modules`](https://github.com/martpie/next-transpile-modules) package. Transpiled modules can be changed by editing the `transpileModules` option in `website/next.config.js`.

This setup works thanks to npm symlinking local dependencies in `website/`'s `node_modules` folder. Yarn workspaces would work as well (though requiring some adaptation from this bolerplate).
