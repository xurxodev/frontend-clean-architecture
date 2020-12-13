module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
        node: true,
    },
    extends: ["../../.eslintrc.js", "react-app", "plugin:react/recommended"],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "react/prop-types": "off",
        "react-hooks/exhaustive-deps": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
    },
};
