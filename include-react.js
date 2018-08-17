const sharedConfig = require('./index');

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
        "react/jsx-indent-props": [2, 4],
        "indent": [2, 4, {
            // We need to ignore jsx elements as "jsx-indent" rules conflict with "indent" rules
            // Explanation: https://github.com/yannickcr/eslint-plugin-react/issues/1679
            // Node list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
            ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
        }]
    }
};
