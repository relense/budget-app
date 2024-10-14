import { ExpoConfig, ConfigContext } from "expo/config";

const extra = {
  config: {
    apiUri: "http://192.168.50.202:3000",
    loginCallbackUri: "exp+budget-app://login/callback",
  },
  eas: {
    projectId: "e66d42ad-0739-467b-9077-c7f268fe4d4f",
  },
};

switch (process.env.ENVIRONMENT) {
  case "local": {
    extra.config.apiUri = "http://192.168.50.202:3010/online-banking";
    extra.config.loginCallbackUri = "exp+bank-mobile://login/callback";
    break;
  }
  case "staging": {
    extra.config.apiUri =
      "https://api.develop.compliance.obconnect.io/online-banking/v1";

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
  plugins: ["expo-router"],
  experiments: {
    typedRoutes: true,
  },
  extra,
});
