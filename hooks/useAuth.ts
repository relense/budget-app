import { router } from "expo-router";
import { helper } from "../utils/helper";
import { addEventListener } from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { WebBrowserAuthSessionResult } from "expo-web-browser";
import { createContext, useContext } from "react";
import { UserAuthSvc } from "../services/userAuth.services";

export interface AuthContext {
  status:
    | "Initializing"
    | "Unauthenticated"
    | "Authenticating"
    | "Authenticated";
  signIn: (params: {
    isSignup: boolean;
    prompt?: "login" | "none";
  }) => Promise<WebBrowserAuthSessionResult | undefined>;
  completeAuth: (params: { callbackUrl: string }) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContext>({
  status: "Initializing",
  signIn: () => Promise.resolve(undefined),
  completeAuth: () => Promise.resolve(),
  signOut: () => {},
});

export const authContext: AuthContext = {
  status: "Initializing" as
    | "Initializing"
    | "Unauthenticated"
    | "Authenticating"
    | "Authenticated",

  signIn: async () => {
    try {
      const loginUrl = await UserAuthSvc.inititateUserAuth();

      return new Promise((resolve, reject) => {
        let resolved = false;

        addEventListener("url", (e) => {
          resolve({ type: "success", url: e.url });
          resolved = true;
        });

        WebBrowser.openAuthSessionAsync(loginUrl, null)
          .then((res) => {
            if (!resolved) {
              authContext.status = "Authenticating";
              resolve(res);
            }
          })
          .catch((err) => {
            if (!resolved) {
              reject(err);
            }
          });
      });
    } catch (error) {
      helper.reportError(error);
      authContext.status = "Unauthenticated";
      router.replace("/");
    }
  },
  completeAuth: async (params: { callbackUrl: string }) => {
    try {
      await UserAuthSvc.completeUserAuth(params.callbackUrl);
      authContext.status = "Authenticated";
      router.replace("/(tabs)/home");
    } catch (error) {
      helper.reportError(error);
      authContext.status = "Unauthenticated";
      throw new Error();
    }
  },
  signOut: async () => {
    try {
      await UserAuthSvc.logoutUser();
      authContext.status = "Unauthenticated";
      router.replace("/");
    } catch (error) {
      helper.reportError(error);
      authContext.status = "Unauthenticated";
      router.replace("/");
    }
  },
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
