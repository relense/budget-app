import { useEffect, useState } from "react";
import LoadingScreen from "../../screens/Loading/Loading";
import ExpensesView from "../../screens/Expenses/Expenses";
import { CategorySvc } from "../../services/categories.services";

type PageState =
  | { status: "Loading" }
  | { status: "Idle"; categories: any[] }
  | { status: "Error" };

export default function Expenses() {
  const [state, setState] = useState<PageState>({ status: "Loading" });

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
      {state.status == "Idle" && <ExpensesView categories={state.categories} />}
      {state.status == "Error" && <ExpensesView categories={[]} />}
    </>
  );
}
