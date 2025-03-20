// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Home, Bell, Scan, ShoppingCart } from "lucide-react-native";
// import HomeScreen from "./HomeScreen";
// import ScreenScan from "./ScreenScan";
// import Cartscreen from "./Cart";

// const Tab = createBottomTabNavigator();

// export default function BottomNavi() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let IconComponent;

//           if (route.name === "Home") {
//             IconComponent = Home;
//           } else if (route.name === "Scan") {
//             IconComponent = Scan;
//           } else if (route.name === "Notification") {
//             IconComponent = Bell;
//           } else if (route.name === "Cart") {
//             IconComponent = ShoppingCart;
//           }

//           return <IconComponent color={color} size={size} />;
//         },
//         tabBarActiveTintColor: "#5A6CF3",
//         tabBarInactiveTintColor: "gray",
//         tabBarShowLabel: false,
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Scan" component={ScreenScan} />
//       <Tab.Screen name="Notification" component={() => <></>} />
//       <Tab.Screen name="Cart" component={Cartscreen} />
//     </Tab.Navigator>
//   );
// }

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Bell, Scan, ShoppingCart } from "lucide-react-native";
import HomeScreen from "./HomeScreen";
import ScreenScan from "./ScreenScan";
import Cartscreen from "./Cart";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ScanStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ScreenScan" component={ScreenScan} />
    </Stack.Navigator>
  );
}

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
          } else if (route.name === "Notification") {
            IconComponent = Bell;
          } else if (route.name === "Cart") {
            IconComponent = ShoppingCart;
          }

          return <IconComponent color={color} size={size} />;
        },
        tabBarActiveTintColor: "#5A6CF3",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Scan" component={ScanStack} />
      <Tab.Screen name="Notification" component={() => <></>} />
      <Tab.Screen name="Cart" component={Cartscreen} />
    </Tab.Navigator>
  );
}