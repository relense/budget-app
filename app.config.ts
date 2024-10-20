import { ExpoConfig, ConfigContext } from "expo/config";

const extra = {
  config: {
    apiUri: "http://localhost:3000/api/v1",
    loginCallbackUri: "exp+budget-app://login/callback",
  },
  eas: {
    projectId: "",
  },
};

switch (process.env.ENVIRONMENT) {
  case "local": {
    extra.config.apiUri = "";
    extra.config.loginCallbackUri = "";

    break;
  }
  case "staging": {
    extra.config.apiUri = "";

    break;
  }
}

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "budget-app",
  slug: "budget-app",
  version: "1.0.0",
  owner: "obconnect-io",
  scheme: "io.budget.app.mobile",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  privacy: "unlisted",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    url: "",
  },
  runtimeVersion: {
    policy: "sdkVersion",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    intentFilters: [
      {
        action: "VIEW",
        autoVerify: true,
        data: [
          {
            scheme: "https",
            host: "bank.develop.compliance.obconnect.io",
          },
          {
            scheme: "https",
            host: "bank.demo.obconnect.io",
          },
        ],
        category: ["BROWSABLE", "DEFAULT"],
      },
    ],
    package: "io.obconnect.bank.mobile",
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: ["expo-router", "expo-secure-store"],
  experiments: {
    typedRoutes: true,
  },
  extra,
});
