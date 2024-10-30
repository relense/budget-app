import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import ExpensesHeader from "../../../../components/ExpensesHeading/ExpensesHeader";
import PageBase from "../../../../wrappers/PageBase/PageBase";

type NavigationItem = {
  label: "Available" | "Expenses" | "Recurrent" | "Income";
};

const navigationItems: NavigationItem[] = [
  { label: "Available" },
  { label: "Expenses" },
  { label: "Recurrent" },
  { label: "Income" },
];

export default function Layout() {
  const router = useRouter();
  const [selectedNavigationItem, setSelectedNavigationItem] =
    useState<NavigationItem>({ label: "Available" });

  const updateNavigationItem = (navigationItem: NavigationItem) => {
    setSelectedNavigationItem(navigationItem);
    if (navigationItem.label === "Available") {
      router.navigate("/(app)/(tabs)/expenses");
    } else if (navigationItem.label === "Expenses") {
      router.navigate("/(app)/(tabs)/expenses/my-expenses");
    } else if (navigationItem.label === "Recurrent") {
      router.navigate("/(app)/(tabs)/expenses/recurrent");
    } else {
      router.navigate("/(app)/(tabs)/expenses/income");
    }
  };

  return (
    <>
      <ExpensesHeader
        navigationItems={navigationItems}
        selectedtNavigationItem={selectedNavigationItem}
        updateNavigationItem={updateNavigationItem}
      />
      <PageBase>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="my-expenses" options={{ headerShown: false }} />
          <Stack.Screen name="recurrent" options={{ headerShown: false }} />
          <Stack.Screen name="income" options={{ headerShown: false }} />
          <Stack.Screen name="add-category" options={{ headerShown: false }} />
        </Stack>
      </PageBase>
    </>
  );
}

export type { NavigationItem };
