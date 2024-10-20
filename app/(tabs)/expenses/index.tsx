import { useEffect, useState } from "react";
import { CategorySvc } from "../../../services/categories.services";
import LoadingScreen from "../../../screens/Loading/Loading";
import AvailableExpensesView from "../../../screens/AvailableExpenses/AvailableExpenses";

type PageState =
  | { status: "Loading" }
  | { status: "Idle"; categories: any[] }
  | { status: "Error" };

const Available = () => {
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
      {state.status == "Idle" && (
        <AvailableExpensesView categories={state.categories} />
      )}
      {state.status == "Error" && <AvailableExpensesView categories={[]} />}
    </>
  );
};

export default Available;
