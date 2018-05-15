# Osmo ESLint config

An [ESLint][eslint] [config file][config] for all Osmo Systems Javascript code.

[eslint]: http://eslint.org
[config]: https://eslint.org/docs/developer-guide/shareable-configs

# Usage
Usage of this config varies depending on if your package uses React (as the lint config then needs to know how to lint .jsx files).

## 1. Installation
Install our config package and peerDependencies

### Without React

```
npm install --save-dev eslint@4.19 eslint-plugin-import@2.11 eslint-config-airbnb-base@12.1
npm install --save-dev "git+ssh://git@github.com/OsmoSystems/eslint-config-osmo.git"
```

### With React
```
npm install --save-dev eslint@4.19 eslint-plugin-import@2.11 eslint-config-airbnb@16.1 eslint-plugin-jsx-a11y@6.0 eslint-plugin-react@7.7
npm install --save-dev "git+ssh://git@github.com/OsmoSystems/eslint-config-osmo.git"
```

## 2. Add .eslintrc

Add an `.eslintrc` file at the top level of your package that references our config

### Without React:

```
{
    "extends": "eslint-config-osmo"
}
```


### With React

```
{
    "extends": "eslint-config-osmo/include-react"
}
```

## 3. Add .eslintignore
Add an `.eslintignore` that symlinks to `.gitignore`. This is necessary to ensure ES Lint does not run against, e.g. files in node_modules, and the assumption is that anything we want git-ignored we also want eslint-ignored.

In the root of the package, run:
```bash
ln -s .gitignore .eslintignore
```

## 4. Add lint script
Finally, add a `lint` script to your `package.json` that runs eslint. Once the entire package has been linted, add a `pretest` script that runs lint when testing, thereby enforces linting at test/build time.

```
{
  "scripts": {
    "lint": "eslint --ext=.js,.jsx .",
    "pretest": "npm run lint",  // Only add this once the entire package has been linted
  }
}
```
