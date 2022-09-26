module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:css-modules/recommended",
        "prettier",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: [
        "@typescript-eslint",
        "react",
        "simple-import-sort",
        "css-modules",
        "prettier",
    ],
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { argsIgnorePattern: "^_", ignoreRestSiblings: true },
        ],
        "react/no-unescaped-entities": "warn",
        "react/display-name": "off",
        "react/prop-types": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "prettier/prettier": "warn",
        "sort-imports": "off",
        "import/order": "off",
        "css-modules/no-unused-class": "off",
        "simple-import-sort/exports": "warn",
        "@typescript-eslint/ban-ts-comment": "off",
        "react-hooks/exhaustive-deps": "off",
        "@typescript-eslint/no-var-requires": "off",
        "simple-import-sort/imports": [
            "warn",
            {
                groups: [
                    ["^\\u0000"], // side effect (E.g.`import 'normalize.css'`)
                    ["^react$"],
                    ["^[^.]"], // Libs
                    ["^../|^~/|^./"],
                    ["\\.module.scss$"],
                ],
            },
        ],
        "prefer-const": "warn",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    ignorePatterns: [
        "**/*.svg",
        "**/*.gif",
        "**/*.png",
        "**/*.lock",
        "**/*.md",
        "**/*.exe",
        "**/*.css",
        "**/*.html",
        "dist/*",
        "parcel-cache/*",
    ],
    overrides: [
        {
            // Node.js/CommonJS files
            files: [
                "gatsby-config.js",
                "gatsby-node.js",
                "insert-netlify-variables.js",
            ],
            env: {
                node: true,
            },
            rules: {
                "@typescript-eslint/no-var-requires": "off",
                "react-hooks/exhaustive-deps": "off",
            },
        },
    ],
};
