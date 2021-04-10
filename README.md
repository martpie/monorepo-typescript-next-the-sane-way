# Monorepo + TypeScript + Next.js: The Sane Way

**Update 08/04/2021**: I haven't updated this repo in a while, it's outdated in many ways. But it should still give you a rough idea of how to set things up :)

This repo is an experiment to set-up a monorepo for a Next.js project using modules located in other directories. Everything is not perfect and "real-world" ready, but it should be a good first step.

- **Strict TypeScript**: potential bugs are not an option
- **Transpiled server-side code**: needed if you are going to re-use modules for both client and server-side
- **Jest** support
- **One TypeScript config to rule them all**: consistency first
- **One TSLint config to rule them all**: no need to be masochist
- **One Jest config to rule them all**: keep things sane (you can filter tests by Regex anyway)
- **Transpile local modules** with Next.js on-demand

## Warning

Since d7655cf00a59ba358c90c5688f4e793f7eca69e2, the approach completely changed. After a couple of projects, I realised the previous approach of having common configuration files is a bad practice:

- Not a true monorepo where every subfolder is a separate app
- Difficult to deploy and test on CI

Now, configuration files are repeated in each sub-folders, which means you need to be careful regarding config and dependencies versions.

## More in details

### TypeScript

The config is at the root of each project: `<root>/<sub-project>/tsconfig.json`.

### Unit-tests

Jest is used for unit tests and all test files should be put in `__tests__` folders to match the Jest philosophy and not pollute your directories too much.

The config is at the root of each project: `<root>/<sub-project>/jest.config.js` and all the tests can be run with `npm run test:unit` in each folder.

### Linting

TODO (TSLint was dropped, I need to add ESLint again).

### Root folder

Put everything you want there, a Next app, shared code, a react-native app, a CRA, even Wordpress if you want.

### Next.js and local modules

Next.js will transpile modules thanks to the [`next-transpile-modules`](https://github.com/martpie/next-transpile-modules) package. Transpiled modules can be changed by editing the `transpileModules` option in `website/next.config.js`.

This setup works thanks to npm symlinking local dependencies in `website/`'s `node_modules` folder. Yarn workspaces would work as well (though requiring some adaptation from this bolerplate).
