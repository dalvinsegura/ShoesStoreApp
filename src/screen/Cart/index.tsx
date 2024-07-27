import { StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../utils/theme";
import {
  moderateScale,
  scale,
  verticalScale,
} from "../../utils/dynamicScaling";
import Tabbar from "../../components/Tabbar";
import { FlatList } from "react-native-gesture-handler";
import { CartState, useCartStore } from "../../states/GlobalState";
import CartListItem from "../../components/CartListItem";

const CartScreen = () => {
  const globalState: CartState = useCartStore() as CartState;

  return (
    <View style={styles.container}>
      <Text style={styles.titleScreen}>Tu carrito</Text>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Total a pagar:</Text>
        <Text style={styles.summaryValue}>
          ${" "}
          {globalState.cartItems.reduce(
            (acc, item) => acc + item.discounted_price,
            0
          )}
        </Text>
      </View>

      <FlatList
        data={globalState.cartItems}
        renderItem={({ item }) => <CartListItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: verticalScale(100),
          marginTop: verticalScale(20),
        }}
      />

      <Tabbar />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.defaultBackground,
    paddingHorizontal: scale(10),
    paddingTop: verticalScale(60),
  },
  titleScreen: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: theme.colors.black,
    marginBottom: verticalScale(20),
    textAlign: "center",
  },
  summaryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: scale(20),
  },
  summaryText: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: theme.colors.gray,
    marginRight: scale(10),
  },
  summaryValue: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    color: "green",
  },
});
