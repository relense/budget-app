import { useState } from "react";
import LoadingScreen from "../../../../screens/Loading/Loading";
import RecurrentView from "../../../../screens/Recurrent/Recurrent";

type PageState =
  | { status: "Loading" }
  | { status: "Idle" }
  | { status: "Error" };

const Recurrent = () => {
  const [state, setState] = useState<PageState>({
    status: "Loading",
  });

  return (
    <>
      {state.status == "Loading" && <LoadingScreen></LoadingScreen>}
      {state.status == "Idle" && <RecurrentView />}
      {state.status == "Error" && <RecurrentView />}
    </>
  );
};

export default Recurrent;
