// import React from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import { ScanLine, AlertCircle, CheckCircle, Calendar } from "lucide-react-native";

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.mainContainer}>
//       {/* Header */}
//       <View style={styles.headerContainer}>
//         <View style={styles.userDetails}>
//           <Text style={styles.greetingText}>Hello 👋</Text>
//           <Text style={styles.userNameText}>Tôn Văn Diện</Text>
//         </View>
//         <Image source={require("./assets/MaskGroup.png")} style={styles.image_group} />
//       </View>

//       {/* Insights Section */}
//       <Text style={styles.sectionHeading}>Your Insights</Text>
//       <View style={styles.insightsWrapper}>
//         {insightsData.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[styles.insightCard, { backgroundColor: item.bgColor }]}
//             onPress={() => {
//               if (item.title === "Scan new") navigation.navigate("Scan");
//             }}
//           >
//             <item.icon size={30} color={item.color} />
//             <Text style={styles.insightTitleText}>{item.title}</Text>
//             <Text style={styles.insightSubtitleText}>{item.subtitle}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };


import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ScanLine, AlertCircle, CheckCircle, Calendar } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.userDetails}>
          <Text style={styles.greetingText}>Hello 👋</Text>
          <Text style={styles.userNameText}>Tôn Văn Diện</Text>
        </View>
        <Image source={require("./assets/MaskGroup.png")} style={styles.image_group} />
      </View>

      {/* Insights Section */}
      <Text style={styles.sectionHeading}>Your Insights</Text>
      <View style={styles.insightsWrapper}>
        {insightsData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.insightCard, { backgroundColor: item.bgColor }]}
            onPress={() => {
              if (item.title === "Scan new") navigation.navigate("Scan");
            }}
          >
            <item.icon size={30} color={item.color} />
            <Text style={styles.insightTitleText}>{item.title}</Text>
            <Text style={styles.insightSubtitleText}>{item.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Data
const insightsData = [
  { title: "Scan new", subtitle: "Scanned 483", icon: ScanLine, color: "#6366F1", bgColor: "#EEF2FF" },
  { title: "Counterfeits", subtitle: "Counterfeited 32", icon: AlertCircle, color: "#F97316", bgColor: "#FEF3C7" },
  { title: "Success", subtitle: "Checkouts 8", icon: CheckCircle, color: "#10B981", bgColor: "#ECFDF5" },
  { title: "Directory", subtitle: "History 26", icon: Calendar, color: "#3B82F6", bgColor: "#DBEAFE" },
];

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: "#FFFFFF", padding: 20, paddingTop: 50 },
  headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  userDetails: { flexDirection: "column" },
  greetingText: { fontSize: 16, color: "#6B7280" },
  userNameText: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  profileImage: { width: 50, height: 50, borderRadius: 25 },
  sectionHeading: { fontSize: 18, fontWeight: "bold", color: "#111827", marginTop: 20 },
  insightsWrapper: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 10 },
  insightCard: { width: "48%", padding: 15, borderRadius: 15, alignItems: "center", marginBottom: 10 },
  insightTitleText: { fontSize: 14, fontWeight: "bold", color: "#111827", marginTop: 5 },
  insightSubtitleText: { fontSize: 12, color: "#6B7280" },
});

export default HomeScreen;
