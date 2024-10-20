import * as SecureStore from "expo-secure-store";
import { config } from "./config";

const fakePromise = <T>(result: T, delay: number = 1000): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, delay);
  });
};

const reportError = (err: any) => {
  console.log(err);
};

const storeToken = async (token: string) => {
  await SecureStore.setItemAsync("access_token", token);
};

const getApiUrl = (url: string) => {
  const prefixUrl = config.apiUri;

  return prefixUrl + url;
};

const helper = {
  getApiUrl,
  fakePromise,
  reportError,
  storeToken,
};

export { helper };
