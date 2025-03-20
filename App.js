// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import BottomNavi from "./BottomNavi"; 

// export default function layoutlayout() {
//   return (
//     <NavigationContainer>
//       <BottomNavi />
//     </NavigationContainer>
//   );
// }


import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavi from "./BottomNavi";
import PaymentScreen from "./Payment"; // Import Checkout
import SuccessScreen from "./Sucess";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BottomNavi} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Sucess" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}