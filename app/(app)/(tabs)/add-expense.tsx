import { useState } from "react";
import { StyleSheet } from "react-native";
import LoadingScreen from "../../../screens/Loading/Loading";
import AddExpensesView from "../../../screens/AddExpenses/AddExpenses";
import { CategorySvc } from "../../../services/categories.services";

type PageState =
  | { status: "Loading" }
  | { status: "Idle"; categoryName: string }
  | { status: "Error" };

export default function AddExpenses() {
  const [state, setState] = useState<PageState>({ status: "Loading" });

  const createCategory = async (categoryName: string) => {
    await CategorySvc.createCategory({ categoryName });
  };

  return (
    <>
      {state.status == "Loading" && <LoadingScreen></LoadingScreen>}
      {state.status == "Idle" && (
        <AddExpensesView createCategory={createCategory} />
      )}
      {state.status == "Error" && (
        <AddExpensesView createCategory={createCategory} />
      )}
    </>
  );
}

const styles = StyleSheet.create({});
