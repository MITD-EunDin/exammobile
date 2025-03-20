// import React from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from "react-native";
// import { Minus, Plus } from "lucide-react-native";
// import PaymentScreen from "./Payment";

// const Cart = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       {/* Product Items */}
//       <View style={styles.productList}>
//         <View style={styles.productItem}>
//           <Image
//             source={{
//               uri:
//                 "https://s3-alpha-sig.figma.com/img/95fa/878b/d5bc6b7e5e42324b3bb5c2a6b4e4bf3b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g14OewxvTQ7sOp7HyL7zAeoO32X4dS8W02KDWPXO5OHktHiSJrjrPXncjtRR5~tO128NwQTy2xGa04n6gMDijwtmGKaVBXNbfWeA4JpxwOBlCX9BTDZVwYTRK7mnKqG4mnScftoGTm~Is1wO2e9zuuGI4kvjI9YX5GM0aa4wGH2LtURfZJwC~ST3jGy6htyrSSYkBkgt5VFMkrXSrkefZ2Xc4TbCAFNdMLpSdaUbZ1Bf9wy9zXtZHi58C9Jju~11QL9uh7bBCCNTJPD42bIf0SgAN86QcMEMFyDy8WQLydZPN67-7OYM8tkxRoPyvwBxGFTlibY9QdhbzNJsoqYYLA__",
//             }}
//             style={styles.productImage2}
//           />
//           <View style={styles.productDetails}>
//             <Text style={styles.owner}>Lauren’s</Text>
//             <Text style={styles.productName}>Orange Juice</Text>
//             <Text style={styles.productPrice}>$149</Text>
//           </View>
//           <View style={styles.quantityControl}>
//               <Minus color="#F08F5F" size={20}/>
//             <Text style={styles.quantityText}>3</Text>
//               <Plus color="#F08F5F" size={20}/>
//           </View>
//         </View>
//         <View style={styles.productItem}>
//           <Image
//             source={{
//               uri:
//                 "https://s3-alpha-sig.figma.com/img/95fa/878b/d5bc6b7e5e42324b3bb5c2a6b4e4bf3b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g14OewxvTQ7sOp7HyL7zAeoO32X4dS8W02KDWPXO5OHktHiSJrjrPXncjtRR5~tO128NwQTy2xGa04n6gMDijwtmGKaVBXNbfWeA4JpxwOBlCX9BTDZVwYTRK7mnKqG4mnScftoGTm~Is1wO2e9zuuGI4kvjI9YX5GM0aa4wGH2LtURfZJwC~ST3jGy6htyrSSYkBkgt5VFMkrXSrkefZ2Xc4TbCAFNdMLpSdaUbZ1Bf9wy9zXtZHi58C9Jju~11QL9uh7bBCCNTJPD42bIf0SgAN86QcMEMFyDy8WQLydZPN67-7OYM8tkxRoPyvwBxGFTlibY9QdhbzNJsoqYYLA__",
//             }}
//             style={styles.productImage2}
//           />
//           <View style={styles.productDetails}>
//             <Text style={styles.owner}>Lauren’s</Text>
//             <Text style={styles.productName}>Orange Juice</Text>
//             <Text style={styles.productPrice}>$149</Text>
//           </View>
//           <View style={styles.quantityControl}>
//               <Minus color="#F08F5F" size={20}/>
//             <Text style={styles.quantityText}>3</Text>
//               <Plus color="#F08F5F" size={20}/>
//           </View>
//         </View>
//         <View style={styles.productItem}>
//           <Image
//             source={{
//               uri:
//                 "https://s3-alpha-sig.figma.com/img/95fa/878b/d5bc6b7e5e42324b3bb5c2a6b4e4bf3b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g14OewxvTQ7sOp7HyL7zAeoO32X4dS8W02KDWPXO5OHktHiSJrjrPXncjtRR5~tO128NwQTy2xGa04n6gMDijwtmGKaVBXNbfWeA4JpxwOBlCX9BTDZVwYTRK7mnKqG4mnScftoGTm~Is1wO2e9zuuGI4kvjI9YX5GM0aa4wGH2LtURfZJwC~ST3jGy6htyrSSYkBkgt5VFMkrXSrkefZ2Xc4TbCAFNdMLpSdaUbZ1Bf9wy9zXtZHi58C9Jju~11QL9uh7bBCCNTJPD42bIf0SgAN86QcMEMFyDy8WQLydZPN67-7OYM8tkxRoPyvwBxGFTlibY9QdhbzNJsoqYYLA__",
//             }}
//             style={styles.productImage2}
//           />
//           <View style={styles.productDetails}>
//             <Text style={styles.owner}>Lauren’s</Text>
//             <Text style={styles.productName}>Orange Juice</Text>
//             <Text style={styles.productPrice}>$149</Text>
//           </View>
//           <View style={styles.quantityControl}>
//               <Minus color="#F08F5F" size={20}/>
//             <Text style={styles.quantityText}>3</Text>
//               <Plus color="#F08F5F" size={20}/>
//           </View>
//         </View>
//       </View>

//       {/* Total and Checkout */}
//       <View style={styles.totalContainer}>
//         <Text style={styles.totalLabel}>Total</Text>
//         <Text style={styles.totalPrice}>$1,527</Text>
//       </View>

//       <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate("PaymentScreen")}>
//         <Text style={styles.checkoutButtonText}>Proceed to checkout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from "react-native";
import { Minus, Plus } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.productList}>
      <View style={styles.productItem}>
          <Image
            source={{
              uri:
                "https://s3-alpha-sig.figma.com/img/95fa/878b/d5bc6b7e5e42324b3bb5c2a6b4e4bf3b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g14OewxvTQ7sOp7HyL7zAeoO32X4dS8W02KDWPXO5OHktHiSJrjrPXncjtRR5~tO128NwQTy2xGa04n6gMDijwtmGKaVBXNbfWeA4JpxwOBlCX9BTDZVwYTRK7mnKqG4mnScftoGTm~Is1wO2e9zuuGI4kvjI9YX5GM0aa4wGH2LtURfZJwC~ST3jGy6htyrSSYkBkgt5VFMkrXSrkefZ2Xc4TbCAFNdMLpSdaUbZ1Bf9wy9zXtZHi58C9Jju~11QL9uh7bBCCNTJPD42bIf0SgAN86QcMEMFyDy8WQLydZPN67-7OYM8tkxRoPyvwBxGFTlibY9QdhbzNJsoqYYLA__",
            }}
            style={styles.productImage2}
          />
          <View style={styles.productDetails}>
            <Text style={styles.owner}>Lauren’s</Text>
            <Text style={styles.productName}>Orange Juice</Text>
            <Text style={styles.productPrice}>$149</Text>
          </View>
          <View style={styles.quantityControl}>
              <Minus color="#F08F5F" size={20}/>
            <Text style={styles.quantityText}>3</Text>
              <Plus color="#F08F5F" size={20}/>
          </View>
        </View>
        <View style={styles.productItem}>
          <Image
            source={{
              uri:
                "https://s3-alpha-sig.figma.com/img/95fa/878b/d5bc6b7e5e42324b3bb5c2a6b4e4bf3b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g14OewxvTQ7sOp7HyL7zAeoO32X4dS8W02KDWPXO5OHktHiSJrjrPXncjtRR5~tO128NwQTy2xGa04n6gMDijwtmGKaVBXNbfWeA4JpxwOBlCX9BTDZVwYTRK7mnKqG4mnScftoGTm~Is1wO2e9zuuGI4kvjI9YX5GM0aa4wGH2LtURfZJwC~ST3jGy6htyrSSYkBkgt5VFMkrXSrkefZ2Xc4TbCAFNdMLpSdaUbZ1Bf9wy9zXtZHi58C9Jju~11QL9uh7bBCCNTJPD42bIf0SgAN86QcMEMFyDy8WQLydZPN67-7OYM8tkxRoPyvwBxGFTlibY9QdhbzNJsoqYYLA__",
            }}
            style={styles.productImage2}
          />
          <View style={styles.productDetails}>
            <Text style={styles.owner}>Lauren’s</Text>
            <Text style={styles.productName}>Orange Juice</Text>
            <Text style={styles.productPrice}>$149</Text>
          </View>
          <View style={styles.quantityControl}>
              <Minus color="#F08F5F" size={20}/>
            <Text style={styles.quantityText}>3</Text>
              <Plus color="#F08F5F" size={20}/>
          </View>
        </View>
        <View style={styles.productItem}>
          <Image
            source={{
              uri:
                "https://s3-alpha-sig.figma.com/img/95fa/878b/d5bc6b7e5e42324b3bb5c2a6b4e4bf3b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g14OewxvTQ7sOp7HyL7zAeoO32X4dS8W02KDWPXO5OHktHiSJrjrPXncjtRR5~tO128NwQTy2xGa04n6gMDijwtmGKaVBXNbfWeA4JpxwOBlCX9BTDZVwYTRK7mnKqG4mnScftoGTm~Is1wO2e9zuuGI4kvjI9YX5GM0aa4wGH2LtURfZJwC~ST3jGy6htyrSSYkBkgt5VFMkrXSrkefZ2Xc4TbCAFNdMLpSdaUbZ1Bf9wy9zXtZHi58C9Jju~11QL9uh7bBCCNTJPD42bIf0SgAN86QcMEMFyDy8WQLydZPN67-7OYM8tkxRoPyvwBxGFTlibY9QdhbzNJsoqYYLA__",
            }}
            style={styles.productImage2}
          />
          <View style={styles.productDetails}>
            <Text style={styles.owner}>Lauren’s</Text>
            <Text style={styles.productName}>Orange Juice</Text>
            <Text style={styles.productPrice}>$149</Text>
          </View>
          <View style={styles.quantityControl}>
              <Minus color="#F08F5F" size={20}/>
            <Text style={styles.quantityText}>3</Text>
              <Plus color="#F08F5F" size={20}/>
          </View>
        </View>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalPrice}>$1,527</Text>
      </View>

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate("Payment")}
      >
        <Text style={styles.checkoutButtonText}>Proceed to checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 20,
  },
  productList: {
    marginBottom: 20,
  },
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage2: {
    height: 60,
    width: 60,
    borderRadius: 12,
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
  },
  owner: {
    fontSize: 12,
    color: "#7A7A7A",
    marginBottom: 2,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
  },
  productPrice: {
    fontSize: 14,
    color: "#F08F5F",
    fontWeight: "500",
    marginTop: 4,
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F5",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  quantityButton: {
    padding: 4,
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: "500",
    color: "#333333",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    paddingHorizontal: 4,
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F08F5F",
  },
  checkoutButton: {
    backgroundColor: "#F08F5F",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#5A6CF3",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});


export default Cart;