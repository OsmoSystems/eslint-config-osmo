# Osmo ESLint config

An [ESLint][eslint] [config file][config] for all Osmo Systems Javascript code.

[eslint]: http://eslint.org
[config]: https://eslint.org/docs/developer-guide/shareable-configs

## Installation

Install this package as a devDependency:

    npm install --save-dev eslint@3.7 babel-eslint@7.0 eslint-plugin-import@2.0 eslint-plugin-react@7.0 eslint-plugin-unicorn@2.1
    npm install --save-dev "git+ssh://git@github.com/OsmoSystems/eslint-config-osmo.git",


## Configuration

1. Add `lint` script to your `package.json`:

    ```json
    {
      // ...
      "scripts": {
        "lint": "eslint --ext=.js,.jsx",
      }
    }
    ```

2. Add an `eslintConfig` entry to your `package.json`, which instructs ESLint to use our shared config:

    ```json
    {
      // ...
      "eslintConfig": {
        "extends": "eslint-config-osmo",
        "root": true
      }
    }
    ```
