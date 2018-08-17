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
        "camelcase": [1], // TODO (SOFT-49): Warning for now (to avoid boiling ocean). Make it an error.
        "comma-dangle": [2, {
            "arrays": "always-multiline",
            "exports": "always-multiline",
            "functions": "never",
            "imports": "always-multiline",
            "objects": "always-multiline",
        }],
        "consistent-return": [1],
        "function-paren-newline": ["error", "consistent"],
        "indent": [2, 4],
        "max-len": [1, { "code": 120 }],
        "no-param-reassign": [1], // TODO (SOFT-49): Warning for now (to avoid boiling ocean). Make it an error.
        "object-curly-newline": [2, { "consistent": true }],
    }
};
