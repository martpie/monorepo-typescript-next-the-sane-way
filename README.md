# Monorepo + TypeScript + Next.js: The Sane Way

This repo is an experiment to set-up a monorepo using TypeScript and some shared config. Everything is not perfect and "real-world" ready, but it should be a good first step.

- **Strict TypeScript**: potential bugs are not an option
- **Jest** support
- **One TypeScript config to rule them all**: consistency first
- **One TSLint config to rule them all**: no need to be masochist
- **One Jest config to rule them all**: keep things sane (you can filter tests by Regex anyway)
- **Transpile local modules** with Next.js on-demand

## More in details

### TypeScript

The config is at the root: `<root>/tsconfig.json`.

### Jest

Unit tests are to be but in a `__tests__` folder to match the Jest philosophy and not pollute your directories too much.

The config is at the root.

### TSLint

Use the config you want in `<root>/tslint.json`. The default uses semistandard.

### "Modules"

Put everything you want there, a Next app, shared code, a react-native app, a CRA...

### To-do

- [ ] Custom Express server using TypeScript (toughest one)
- [ ] Different Types definitions per projects: a definition Type for a website may not be shared with a react-native app for example (global types are currently shared across modules)
- ...

Eventually:

- [ ] Cypress support?
