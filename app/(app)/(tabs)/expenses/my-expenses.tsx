import { useEffect, useState } from "react";
import { CategorySvc } from "../../../../services/categories.services";
import LoadingScreen from "../../../../screens/Loading/Loading";
import ExpensesView from "../../../../screens/Expenses/Expenses";

type PageState =
  | { status: "Loading" }
  | { status: "Idle"; categories: any[] }
  | { status: "Error" };

const MyExpenses = () => {
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
      {state.status == "Idle" && <ExpensesView />}
      {state.status == "Error" && <ExpensesView />}
    </>
  );
};

export default MyExpenses;
