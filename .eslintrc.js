module.exports = {
    root: true,

    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },

    env: {
        browser: true,
        "cypress/globals": true
    },

    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    extends: [
        'plugin:vue/essential',
        'airbnb-base'
    ],

    // required to lint *.vue files
    plugins: [
        'vue',
        'cypress'
    ],

    globals: {
        'ga': true, // Google Analytics
        'cordova': true,
        '__statics': true,
        "cy": false,
        "Cypress": false
    },

    // add your custom rules here
    rules: {
        'no-param-reassign': 'off',
        'prefer-promise-reject-errors': 'off',

        'import/first': 'off',
        'import/named': 'error',
        'import/namespace': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',

        // allow console.log during development only
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // allow debugger during development only
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        indent: ['error', 4],
        'max-len': ['warn', 140],
        'no-underscore-dangle': ['off'],
        'class-methods-use-this': ['off'],
        'padded-blocks': ['off'],
    }
};
