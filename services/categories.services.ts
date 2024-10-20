import axios from "axios";
import * as SecureStore from "expo-secure-store";

import { helper } from "../utils/helper";

const createCategory = async (params: { categoryName: string }) => {
  try {
    const token = await SecureStore.getItemAsync("access_token");

    const res = await axios.post(
      helper.getApiUrl("/categories"),
      {
        category: {
          name: params.categoryName,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (err: any) {
    throw new Error(err.response.data);
  }
};

const getCategories = async () => {
  try {
    const token = await SecureStore.getItemAsync("access_token");

    const res = await axios.get(helper.getApiUrl("/categories"), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (err: any) {
    throw new Error(err.response.data);
  }
};

const CategorySvc = {
  createCategory,
  getCategories,
};

export { CategorySvc };
