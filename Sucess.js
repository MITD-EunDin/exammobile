import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const Success = () => {
  const navigation = useNavigation(); // Use navigation hook

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
        <Text style={styles.textBack}>←</Text>
      </TouchableOpacity>
      <Image source={require("./assets/imgsucess.png")} style={styles.imgMain} />
      <Text style={styles.title}>Payment Success, Yayy!</Text>
      <Text style={styles.description}>
        We will send order details and invoice to your contact no. and registered email.
      </Text>
      <TouchableOpacity style={styles.detailsButton}>
        <Text style={styles.detailsText}>Check Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.invoiceButton}>
        <Text style={styles.invoiceText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F9FAFC",
  },
  buttonBack: {
    position: "absolute",
    top: 50,
    left: 20,
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
  imgMain: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#22C55E", // Green for success
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#6B7280",
  },
  detailsButton: {
    backgroundColor: "#5A6CF3",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
  },
  detailsText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  invoiceButton: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#5A6CF3",
  },
  invoiceText: {
    color: "#5A6CF3",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Success;