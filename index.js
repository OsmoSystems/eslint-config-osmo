module.exports = {
    "extends": "airbnb-base",
    "env": {
        "es6": true,
        "jasmine": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
    },
    "rules": {
        "indent": [2, 4],
        "max-len": [1, { "code": 120 }],
        "comma-dangle": [2, {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "never",
        }],
        "consistent-return": [1],
        // TODO (SOFT-49): These are warnings for now (to avoid boiling ocean). Make them errors.
        "camelcase": [1],
        "no-param-reassign": [1]
    }
};
