import { helper } from "../utils/helper";

type BasicConfig = {
  totalBalance: number;
  totalExpenses: number;
  totalRecurrent: number;
  totalIncome: number;
};

type BudgetCategories = {
  id: string;
  name: string;
  totalAvailable: number;
}[];

const getBasicInfo = async () => {
  const data: BasicConfig = await helper.fakePromise(
    {
      totalBalance: 2000000,
      totalExpenses: 3000000,
      totalRecurrent: 4000000,
      totalIncome: 5000000,
    },
    2000
  );

  return data;
};

const getBudgetCategories = async () => {
  const data: BudgetCategories = await helper.fakePromise(
    [
      { id: "1", name: "Shopping", totalAvailable: 1942 },
      { id: "2", name: "Eating Out", totalAvailable: 0 },
      { id: "3", name: "Gas", totalAvailable: 847 },
      { id: "4", name: "Tolls", totalAvailable: 1200 },
      { id: "5", name: "Health", totalAvailable: 625 },
    ],
    2000
  );

  return data;
};

const UserService = {
  getBasicInfo,
  getBudgetCategories,
};

export { UserService };
export type { BasicConfig, BudgetCategories };
