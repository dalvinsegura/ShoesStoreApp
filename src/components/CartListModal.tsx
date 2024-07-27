import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { CartState, useCartStore } from "../states/GlobalState";
import { moderateScale, scale, verticalScale } from "../utils/dynamicScaling";
import theme from "../utils/theme";
import CartListItem from "./CartListItem";

const CartListModal = () => {
  const globalState: CartState = useCartStore() as CartState;

  return (
    <Modal isVisible={globalState.isCartModalVisible}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Carrito</Text>
        <FlatList
          data={globalState.cartItems}
          contentContainerStyle={{ paddingBottom: verticalScale(100) }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CartListItem item={item} />}
          // keyExtractor={(item: Shoe) => item.id.toString()}
        />
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Total:</Text>
        <Text style={styles.summaryText}>
          $
          {globalState.cartItems.reduce(
            (acc, item) => acc + item.discounted_price,
            0
          )}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => globalState.toggleCartModal()}
      >
        <Text style={styles.closeButtonText}>Cerrar</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default CartListModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secundaryBackground,
    padding: scale(20),
    borderRadius: scale(10),
  },
  headerText: {
    fontSize: moderateScale(24),
    fontWeight: "500",
    marginBottom: verticalScale(20),
  },

  closeButton: {
    position: "absolute",
    bottom: verticalScale(20),
    width: "80%",
    alignSelf: "center",
    backgroundColor: theme.colors.black,
    padding: scale(10),
    borderRadius: scale(10),
  },
  closeButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: moderateScale(16),
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: verticalScale(80),
    width: "80%",
    alignSelf: "center",
  },
  summaryText: {
    fontSize: moderateScale(18),
    fontWeight: "500",
  },
});
