const sharedConfig = require('index');

module.exports = {
    "extends": "airbnb",
    "env": sharedConfig.env,
    "parserOptions": {
        ...sharedConfig.parserOptions,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        ...sharedConfig.rules,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4]
    }
};
