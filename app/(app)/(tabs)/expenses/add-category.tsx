import { useState } from "react";

import LoadingScreen from "../../../../screens/Loading/Loading";
import DynamicCalculatorView from "../../../../screens/DynamicCalculator/DynamicCalculator";

type PageState =
  | { status: "Loading" }
  | { status: "Idle" }
  | { status: "Error" };

const AddCategory = () => {
  const [state, setState] = useState<PageState>({
    status: "Idle",
  });

  return (
    <>
      {state.status == "Loading" && <LoadingScreen></LoadingScreen>}
      {state.status == "Idle" && <DynamicCalculatorView />}
      {state.status == "Error" && <DynamicCalculatorView />}
    </>
  );
};

export default AddCategory;
