module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    overrides: [
        // {
        //     files: ["**/*.ts"],
        //     parser: "@typescript-eslint/parser",
        //     plugins: ["@typescript-eslint"],
        //     extends: ["eslint:recommended", "plugin:prettier/recommended", "plugin:@typescript-eslint/recommended"]
        // }
    ],
    parserOptions: {
        // project: ["*.ts"],
        ecmaVersion: "latest",
        sourceType: "module"
    },
    // plugins: ["@typescript-eslint"],
    rules: {
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-explicit-any": "off"
    }
};
