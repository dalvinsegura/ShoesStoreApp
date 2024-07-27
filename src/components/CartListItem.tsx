import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "../utils/dynamicScaling";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Shoe from "../interfaces/ShoeInterface";
import { CartState, useCartStore } from "../states/GlobalState";

const CartListItem = ({ item }: { item: Shoe }) => {
  const globalState: CartState = useCartStore() as CartState;

  return (
    <View style={styles.cartItem}>
      <Image
        source={{
          uri: item.image_url,
        }}
        style={styles.itemImage}
      />
      <View
        style={{
          marginLeft: scale(10),
          justifyContent: "center",
        }}
      >
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.discounted_price}</Text>
      </View>

      <TouchableOpacity
        style={{
          flexGrow: 1,
          alignItems: "flex-end",
          justifyContent: "center",
        }}
        onPress={() => globalState.removeFromCart(item)}
      >
        <MaterialCommunityIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default CartListItem;

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    // justifyContent: "space-between",
    marginBottom: verticalScale(10),
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    padding: scale(10),
    borderRadius: scale(10),
  },
  itemImage: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(10),
  },
  itemTitle: {
    fontSize: moderateScale(14),
  },
  itemPrice: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: "green",
  },
});
