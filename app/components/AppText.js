export default AppText = Platform.select({
  ios: () => require("AppText.ios.js"),
  android: () => require("AppText.android.js"),
});
