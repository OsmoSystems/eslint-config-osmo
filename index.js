module.exports = {
    "extends": "airbnb-base",
    "env": {
        "es6": true,
        "jasmine": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
    },
    "rules": {
        "indent": ["error", 4],
        "max-len": ["warning", { "code": 100 }],
        "object-curly-spacing": ["error", "never"],
        "array-bracket-spacing": ["error", "never"]
    }
};
