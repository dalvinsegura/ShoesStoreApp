import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Shoe from "../interfaces/ShoeInterface";
import { moderateScale, scale, verticalScale } from "../utils/dynamicScaling";
import Feather from "@expo/vector-icons/Feather";
import isPrime from "../utils/primeNumberDetector";
import { NavigationProp } from "@react-navigation/native";
import MainNavigatorRoutes from "../enums/MainNavigatorRoutes";

const ShoeItem = ({
  shoe,
  navigation,
}: {
  shoe: Shoe;
  navigation: NavigationProp<any>;
}) => {
  // console.log("shoe", shoe);

  const handleNavigation = () => {
    navigation.navigate(MainNavigatorRoutes.ShoeDetail, shoe);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: shoe.image_url,
          }}
        />
      </View>
      <Text style={styles.nameText} numberOfLines={1} adjustsFontSizeToFit>
        {shoe.name}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.priceText}>${shoe.discounted_price}</Text>
          <Text style={styles.originalPriceText}>${shoe.original_price}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather name="star" size={16} color="gold" />
          <Text style={styles.ratingText}>{shoe.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShoeItem;

const styles = StyleSheet.create({
  container: {
    width: scale(160),
    marginBottom: verticalScale(20),
    overflow: "hidden",
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  imageContainer: {
    width: scale(150),
    height: scale(150),
    padding: scale(10),
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: scale(10),
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  nameText: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    marginTop: verticalScale(10),
  },
  priceText: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
  },
  originalPriceText: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.5)",
    marginLeft: scale(10),
    textDecorationLine: "line-through",
  },
  ratingText: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.5)",
    marginLeft: scale(5),
  },
});
