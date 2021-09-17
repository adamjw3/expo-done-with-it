module.exports = {
    extends: ['airbnb', 'prettier'],
    plugins: ['react', 'react-native', 'react-hooks', 'prettier'],
    parser: 'babel-eslint',
    env: {
        jest: true,
        'react-native/react-native': true,
    },
    rules: {
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'comma-dangle': 'off',
        'padded-blocks': 'off',
        'arrow-body-style': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'react-native/no-unused-styles': 0,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 0,
        'react-native/no-color-literals': 0,
        'react-native/no-raw-text': 0,
        'react-native/no-single-element-style-arrays': 2,
        /* optional below remove in production */
        'react/jsx-props-no-spreading': 0,
        'global-require': 0,
        'no-console': 0,
        'react/no-unescaped-entities': 0
    },
    globals: {
        fetch: false,
    },
};
