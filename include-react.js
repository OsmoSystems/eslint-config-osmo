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
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4]
    }
};
