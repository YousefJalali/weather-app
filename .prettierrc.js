module.exports = {
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.svg',
      options: {
        parser: 'html',
      },
    },
  ],
};
