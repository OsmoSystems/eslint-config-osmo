# Osmo ESLint config

An [ESLint][eslint] [config file][config] for all Osmo Systems Javascript code.

[eslint]: http://eslint.org
[config]: https://eslint.org/docs/developer-guide/shareable-configs

## Installation
Install this package as a devDependency, as well as it's peerDependencies. The peerDependencies differ if your package includes react (as the lint config then needs to know how to lint .jsx files):

### If your package does not include react:
```
npm install --save-dev eslint@4.19 eslint-plugin-import@2.11 eslint-config-airbnb-base@12.1
```

### If your package includes react, instead:
```
npm install --save-dev eslint@4.19 eslint-plugin-import@2.11 eslint-config-airbnb@16.1 eslint-plugin-jsx-a11y@6.0 eslint-plugin-react@7.7
```

### Finally, install our config:

```
npm install --save-dev "git+ssh://git@github.com/OsmoSystems/eslint-config-osmo.git"
```

## Configuration

1. Add `lint` script to your `package.json`:

    ```json
    {
      "scripts": {
        "lint": "eslint --ext=.js,.jsx .",
      }
    }
    ```

2. Add an `.eslintrc` file at the top level of your package. This should be configured in one of two ways, depending on if the package contains react (and therefore .jsx files that need to be linted).

Without react:

    ```json
    {
        "extends": "eslint-config-osmo"
    }
    ```

With react:

    ```json
    {
        "extends": "eslint-config-osmo/include-react"
    }
    ```
