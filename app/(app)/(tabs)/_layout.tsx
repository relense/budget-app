import { Tabs } from "expo-router";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "@/constants/Colors";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name={"home"}
              size={23}
              style={[{ marginBottom: -3, marginTop: 5 }]}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="expenses"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name={"credit-card"}
              size={23}
              style={[{ marginBottom: -3, marginTop: 5 }]}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add-expense"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name={"plus"}
              size={23}
              style={[{ marginBottom: -3, marginTop: 5 }]}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="savings"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name={"bank"}
              size={23}
              style={[{ marginBottom: -3, marginTop: 5 }]}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name={"user"}
              size={23}
              style={[{ marginBottom: -3, marginTop: 5 }]}
              color={focused ? color : color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
