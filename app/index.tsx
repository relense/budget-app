import { useState } from "react";
import * as WebBrowser from "expo-web-browser";

import LoginView from "../screens/Login/Login";
import LoadingScreen from "../screens/Loading/Loading";
import { useRouter } from "expo-router";
import { useAuth } from "../hooks/useAuth";

type PageState =
  | { status: "Loaded" }
  | { status: "LoggingIn" }
  | { status: "Error" };

export default function App() {
  const [state, setState] = useState<PageState>({ status: "Loaded" });
  const { signIn, completeAuth } = useAuth();
  const router = useRouter();

  const handleSignIn = async (params: { isSignup: boolean }) => {
    setState({ status: "LoggingIn" });

    await new Promise((resolve) => setTimeout(resolve, 500));
    try {
      if (!signIn || !completeAuth) {
        throw new Error();
      }

      const response = (await signIn({
        isSignup: params.isSignup,
      })) as WebBrowser.WebBrowserRedirectResult;

      if (response && response.type && response.url) {
        await completeAuth({ callbackUrl: response.url });
        router.replace("/(tabs)/home");
      }

      setState({ status: "Loaded" });
    } catch (err) {
      setState({ status: "Error" });
    }
  };

  return (
    <>
      {state.status == "LoggingIn" && <LoadingScreen></LoadingScreen>}
      {state.status == "Loaded" && (
        <LoginView handleSignIn={() => handleSignIn({ isSignup: true })} />
      )}
      {state.status == "Error" && (
        <LoginView handleSignIn={() => handleSignIn({ isSignup: true })} />
      )}
    </>
  );
}
