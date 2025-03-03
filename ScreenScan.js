import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ScreenScan = ( { navigation } ) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
        <Text style={styles.textBack}>←</Text>
      </TouchableOpacity>

      {/* Image Scanner */}
      <View style={styles.scanBoxImg}>
        <Image source={{ uri: "https://s3-alpha-sig.figma.com/img/95fa/878b/d5bc6b7e5e42324b3bb5c2a6b4e4bf3b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g14OewxvTQ7sOp7HyL7zAeoO32X4dS8W02KDWPXO5OHktHiSJrjrPXncjtRR5~tO128NwQTy2xGa04n6gMDijwtmGKaVBXNbfWeA4JpxwOBlCX9BTDZVwYTRK7mnKqG4mnScftoGTm~Is1wO2e9zuuGI4kvjI9YX5GM0aa4wGH2LtURfZJwC~ST3jGy6htyrSSYkBkgt5VFMkrXSrkefZ2Xc4TbCAFNdMLpSdaUbZ1Bf9wy9zXtZHi58C9Jju~11QL9uh7bBCCNTJPD42bIf0SgAN86QcMEMFyDy8WQLydZPN67-7OYM8tkxRoPyvwBxGFTlibY9QdhbzNJsoqYYLA__" }} style={styles.productImage} />
      </View>

      {/* Product Info */}
      <View style={styles.infopr}>
            {/* Ảnh sản phẩm nhỏ */}
            <Image source={{ uri: "https://s3-alpha-sig.figma.com/img/95fa/878b/d5bc6b7e5e42324b3bb5c2a6b4e4bf3b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g14OewxvTQ7sOp7HyL7zAeoO32X4dS8W02KDWPXO5OHktHiSJrjrPXncjtRR5~tO128NwQTy2xGa04n6gMDijwtmGKaVBXNbfWeA4JpxwOBlCX9BTDZVwYTRK7mnKqG4mnScftoGTm~Is1wO2e9zuuGI4kvjI9YX5GM0aa4wGH2LtURfZJwC~ST3jGy6htyrSSYkBkgt5VFMkrXSrkefZ2Xc4TbCAFNdMLpSdaUbZ1Bf9wy9zXtZHi58C9Jju~11QL9uh7bBCCNTJPD42bIf0SgAN86QcMEMFyDy8WQLydZPN67-7OYM8tkxRoPyvwBxGFTlibY9QdhbzNJsoqYYLA__" }} style={styles.productImage2} />
            <View>
                <Text style={styles.owner}>Lauren’s</Text>
                <Text style={styles.productName}>Orange Juice</Text>
            </View>
            <Image source={require("./assets/Group_3.png")} style={styles.image_group} />
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      backgroundColor: "#F9FAFC", 
      alignItems: "center", 
      justifyContent: "center" 
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
    scanBoxImg: { 
      width: "100%", 
      height: "100%", 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundColor: "#EAEAEA" 
    },
    productImage: { 
      width: "100%", 
      height: "100%", 
      resizeMode: "cover", 
      borderRadius: 20,
      position: "absolute", 
    },
    infopr: { 
        position: "absolute", 
        bottom: 20, 
        backgroundColor: "white", 
        padding: 15, 
        borderRadius: 20, 
        alignItems: "center", 
        width: 292, 
        height: 82, 
        flexDirection: "row", 
        justifyContent: "space-between", 
        elevation: 5, 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6
      },
      
    owner: { 
      fontSize: 14, 
      color: "gray" 
    },
    productName: { 
      fontSize: 18, 
      fontWeight: "bold" 
    },
    productImage2: {
        height: 53,
        width: 52,
        borderRadius: 10
    },
    image_group : {
        backgroundColor: "#5A6CF3",
        width: 45,
        height: 44,
        borderRadius: 10
    }
  });
  

export default ScreenScan;
