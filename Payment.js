// import React from "react";
// import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
// import { Lock, CreditCard, Apple } from "lucide-react-native"; // Importing icons from lucide-react-native

// const Checkout = ({ navigation }) => {
//   return (
//     <View style={styles.checkoutContainer}>
//       <View style={styles.checkoutCard}>
//         <Text style={styles.checkoutTitle}>Checkout 🧾</Text>
//         <Text style={styles.checkoutPrice}>₹ 1,527</Text>
//         <Text style={styles.checkoutGst}>Including GST (18%)</Text>

//         <View style={styles.checkoutTabs}>
//           <TouchableOpacity style={styles.tabButton}>
//             <Text style={styles.tabButtonText}>Credit card</Text>
//             <CreditCard size={24} color="#000" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.tabButton}>
//             <Text style={styles.tabButtonText}>Apple Pay</Text>
//             <Apple size={24} color="#000" />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.inputGroup}>
//           <Text>Card number</Text>
//           <View style={styles.inputWithIcon}>
//             <TextInput
//               style={styles.input}
//               placeholder="5261 4141 0151 8472"
//               keyboardType="numeric"
//             />
//             <CreditCard size={28} style={styles.iconMastercard} />
//           </View>
//         </View>

//         <View style={styles.inputGroup}>
//           <Text>Cardholder name</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Christie Doe"
//           />
//         </View>

//         <View style={styles.inputRow}>
//           <View style={styles.inputColumn}>
//             <Text>Expiry date</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="06 / 2024"
//             />
//           </View>
//           <View style={styles.inputColumn}>
//             <Text>CVV / CVC</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="915"
//               keyboardType="numeric"
//             />
//           </View>
//         </View>

//         <Text style={styles.noticeText}>
//           We will send you order details to your email after the successful payment
//         </Text>

//         <TouchableOpacity style={styles.payButton}>
//           <Lock size={24} color="white" />
//           <Text style={styles.payButtonText}> Pay for the order</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Lock, CreditCard, Apple } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const Checkout = () => {
  const navigation = useNavigation(); // Use navigation hook

  return (
    <View style={styles.checkoutContainer}>
      <View style={styles.checkoutCard}>
        <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
          <Text style={styles.textBack}>←</Text>
        </TouchableOpacity>
        <Text style={styles.checkoutTitle}>Checkout</Text>
        <Text style={styles.checkoutPrice}>₹ 1,527</Text>
        <Text style={styles.checkoutGst}>Including GST (18%)</Text>

        <View style={styles.checkoutTabs}>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabButtonText}>Credit card</Text>
            <CreditCard size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabButtonText}>Apple Pay</Text>
            <Apple size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text>Card number</Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              style={styles.input}
              placeholder="5261 4141 0151 8472"
              keyboardType="numeric"
            />
            <CreditCard size={28} style={styles.iconMastercard} />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text>Cardholder name</Text>
          <TextInput
            style={styles.input}
            placeholder="Christie Doe"
          />
        </View>

        <View style={styles.inputRow}>
          <View style={styles.inputColumn}>
            <Text>Expiry date</Text>
            <TextInput
              style={styles.input}
              placeholder="06 / 2024"
            />
          </View>
          <View style={styles.inputColumn}>
            <Text>CVV / CVC</Text>
            <TextInput
              style={styles.input}
              placeholder="915"
              keyboardType="numeric"
            />
          </View>
        </View>

        <Text style={styles.noticeText}>
          We will send you order details to your email after the successful payment
        </Text>

        <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate("Sucess")}>
          <Lock size={24} color="white" />
          <Text style={styles.payButtonText}>Pay for the order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkoutContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: "#f8fafc",
  },
  checkoutCard: {
    width: 400,
    padding: 24,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#ffffff",
    position: 'relative' // Thêm position relative để định vị buttonBack
  },
  checkoutTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkoutPrice: {
    fontSize: 20,
    color: "#16a34a",
    fontWeight: "600",
  },
  checkoutGst: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 20,
  },
  checkoutTabs: {
    flexDirection: "row",
    marginBottom: 24,
  },
  tabButton: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  tabButtonText: {
    marginRight: 8,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputWithIcon: {
    position: "relative",
  },
  iconMastercard: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -50 }],
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  inputColumn: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  noticeText: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 20,
  },
  payButton: {
    width: "100%",
    backgroundColor: "#22c55e",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  payButtonText: {
    color: "white",
    fontWeight: "600",
    marginLeft: 8,
  },
  buttonBack: {
    position: "absolute",
    top: 10, // Điều chỉnh vị trí nút quay lại
    left: 10, // Điều chỉnh vị trí nút quay lại
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    zIndex: 10,
    elevation: 5,
  },
  textBack: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Checkout;