module.exports = {
    "extends": "airbnb-base",
    // 'env's define global variables that are predefined
    "env": {
        "es6": true,
        "jasmine": true
    },
    "parserOptions": {
        "ecmaVersion": 6,  // Support ES6 syntax
    },
    "rules": {
        "indent": [2, 4],
        "max-len": [1, { "code": 100 }]
    }
};
