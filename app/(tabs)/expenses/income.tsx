import { useEffect, useState } from "react";
import { CategorySvc } from "../../../services/categories.services";
import LoadingScreen from "../../../screens/Loading/Loading";
import IncomeView from "../../../screens/Income/Income";

type PageState =
  | { status: "Loading" }
  | { status: "Idle"; categories: any[] }
  | { status: "Error" };

const Income = () => {
  const [state, setState] = useState<PageState>({
    status: "Loading",
  });

  useEffect(() => {
    const getCategories = async () => {
      const res = await CategorySvc.getCategories();

      setState({
        status: "Idle",
        categories: res,
      });
    };

    getCategories();
  }, []);

  return (
    <>
      {state.status == "Loading" && <LoadingScreen></LoadingScreen>}
      {state.status == "Idle" && <IncomeView />}
      {state.status == "Error" && <IncomeView />}
    </>
  );
};

export default Income;
