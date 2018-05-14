module.exports = {
    "extends": "airbnb",
    "env": {
        "es6": true,
        "jasmine": true
    },
    "parserOptions": {
        "ecmaVersion": 6,  // Support ES6 syntax
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "indent": [2, 4],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4]
    }
};
