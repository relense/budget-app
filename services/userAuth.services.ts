import axios from "axios";
import * as SecureStore from "expo-secure-store";

import { helper } from "../utils/helper";

type AuthInfoSuccessful = {
  status: "Authenticated";
  name: string;
  logout: () => Promise<void>;
};
type AuthInfoUnsuccessful = {
  status: "Unauthenticated";
};

type AuthResponse =
  | {
      status: "Authenticated";
      userInfo: {
        email: string;
      };
    }
  | {
      status: "Unauthenticated";
    };

const checkUserSession = async () => {
  const responseBody = {
    status: "Authenticated",
    userInfo: {
      email: "email@email.com",
      name: "name",
      preferred_username: "superName",
    },
  };

  if (responseBody.userInfo) {
    return {
      status: "Authenticated",
      name:
        responseBody.userInfo.name || responseBody.userInfo.preferred_username,
      logout: () => UserAuthSvc.logoutUser(),
    } as const;
  } else {
    return {
      status: "Unauthenticated",
    } as const;
  }
};

const inititateUserAuth = async () => {
  const res = await axios.get(helper.getApiUrl("/auth/login"), {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const loginUrl = res.data.loginUrl;

  if (loginUrl) {
    return loginUrl;
  } else {
    throw new Error("Invalid redirection");
  }
};

const completeUserAuth = async (
  url: string
): Promise<AuthInfoSuccessful | AuthInfoUnsuccessful> => {
  const fragment = url.split("#")[1];
  const params = new URLSearchParams(fragment);
  const accessToken = params.get("access_token");

  if (accessToken) {
    helper.storeToken(accessToken);
  } else {
    return {
      status: "Unauthenticated",
    };
  }

  const res = await axios.get(helper.getApiUrl("/auth/callback"), {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      accessToken,
    },
  });

  if (res.data.status === "Authenticated") {
    return {
      status: "Authenticated",
      name: res.data.userInfo?.email || "",
      logout: () => UserAuthSvc.logoutUser(),
    };
  } else {
    return {
      status: "Unauthenticated",
    };
  }
};

const logoutUser = async () => {
  await axios.get(helper.getApiUrl("/auth/logout"));
  await SecureStore.deleteItemAsync("access_token");
};

const UserAuthSvc = {
  checkUserSession,
  inititateUserAuth,
  completeUserAuth,
  logoutUser,
};

export { UserAuthSvc };
export type { AuthInfoSuccessful };
