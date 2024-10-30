import React, { useState, useEffect } from "react";

import { BasicConfig, UserService } from "../../../../services/user.services";
import HomeView from "../../../../screens/Home/Home";
import LoadingScreen from "../../../../screens/Loading/Loading";

type PageState =
  | { status: "Loading" }
  | { status: "Idle"; info: BasicConfig }
  | { status: "Error"; message: string };

const Home = () => {
  const [state, setState] = useState<PageState>({ status: "Loading" });

  useEffect(() => {
    const fetchBasicInfo = async () => {
      try {
        const res = await UserService.getBasicInfo();
        setState({
          status: "Idle",
          info: res,
        });
      } catch (error) {
        setState({ status: "Error", message: "Something went wrong" });
      }
    };
    fetchBasicInfo();
  }, []);

  return (
    <>
      {state.status == "Loading" && <LoadingScreen></LoadingScreen>}
      {state.status == "Idle" && <HomeView />}
      {state.status == "Error" && <HomeView />}
    </>
  );
};

export default Home;
