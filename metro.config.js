const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require("nativewind/metro");


const myConfig = {};

const config = mergeConfig(getDefaultConfig(__dirname), myConfig);

module.exports = withNativeWind(config, { input: "./global.css" });
