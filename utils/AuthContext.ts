import { WebBrowserAuthSessionResult } from "expo-web-browser";
import React from "react";

export interface AuthContext {
  signIn: (params: {
    isSignup: boolean;
    prompt?: "login" | "none";
  }) => Promise<WebBrowserAuthSessionResult | undefined>;
  completeAuth: (params: { callbackUrl: string }) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = React.createContext<AuthContext>({
  signIn: () => Promise.resolve(undefined),
  completeAuth: () => Promise.resolve(),
  signOut: () => {},
});
