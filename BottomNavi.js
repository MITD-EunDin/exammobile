import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Bell, Scan } from "lucide-react-native";
import HomeScreen from "./HomeScreen";
import ScreenScan from "./ScreenScan";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomNavi() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let IconComponent;

          if (route.name === "Home") {
            IconComponent = Home;
          } else if (route.name === "Scan") {
            IconComponent = Scan;
          } else if (route.name === "Notifications") {
            IconComponent = Bell;
          }

          return (
            <View>
              <IconComponent color={color} size={size} />
            </View>
          );
        },
        tabBarActiveTintColor: "#5A6CF3",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Scan" component={ScreenScan} />
      <Tab.Screen name="Notifications" component={HomeScreen} />
    </Tab.Navigator>
  );
}
