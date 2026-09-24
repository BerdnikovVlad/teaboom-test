export default {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      propList: ["*"],
      selectorBlackList: [/^html$/],
      mediaQuery: true,
      rootValue: 16,
    },
  },
};
