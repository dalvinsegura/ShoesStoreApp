import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState, useContext } from "react";
import Shoe from "../../interfaces/ShoeInterface";
import {
  ParamListBase,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import theme from "../../utils/theme";
import { scale, verticalScale } from "../../utils/dynamicScaling";
import { CartState, useCartStore } from "../../states/GlobalState";
import CartListModal from "../../components/CartListModal";

type ShoeDetailRouteProp = RouteProp<ParamListBase, "ShoeDetail">;

const ShoeDetail = ({ route }: { route: ShoeDetailRouteProp }) => {
  const shoe: Shoe = route.params as Shoe;
  const navigation = useNavigation();

  const [selectedSize, setSelectedSize] = useState<number>(shoe.size[0]);
  const [alreadyInCart, setAlreadyInCart] = useState<boolean>(false);

  const handleSizeSelection = (size: number) => {
    setSelectedSize(size);
  };

  const globalState: CartState = useCartStore() as CartState;

  const handleAddToCart = () => {
    // globalState.addToCart(shoe);
    // globalState.toggleCartModal();

    // Check if the shoe is already in the cart and update the state
    const isAlreadyInCart = globalState.cartItems.some(
      (item) => item.id === shoe.id
    );
    setAlreadyInCart(isAlreadyInCart);

    // If the shoe is not in the cart, add it
    if (!isAlreadyInCart) {
      globalState.addToCart(shoe);
    }

    globalState.toggleCartModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}
        >
          <Feather name="arrow-left" size={24} color={theme.colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Detalles del tenis</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: shoe.image_url,
          }}
          style={styles.shoeImage}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: "70%" }}>
          <Text style={styles.shoeName}>{shoe.name}</Text>
          <Text style={styles.shoeBrand}>{shoe.brand}</Text>
        </View>
        <View style={styles.shoePriceContainer}>
          <Text style={styles.originalPrice}>${shoe.original_price}</Text>
          <Text style={styles.discountedPrice}>${shoe.discounted_price}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View style={styles.detailContainer}>
          <MaterialCommunityIcons
            name="shoe-sneaker"
            size={24}
            color="#2fbad6"
          />
          <Text style={styles.detailText}>{shoe.in_stock} stock</Text>
        </View>

        <View style={styles.detailContainer}>
          <FontAwesome5 name="shopping-bag" size={scale(20)} color="#2fd6b8" />
          <Text style={styles.detailText}>{shoe.sold} vendidos</Text>
        </View>

        <View style={styles.detailContainer}>
          <MaterialIcons name="star" size={scale(20)} color="#f0c929" />
          <Text style={styles.detailText}>{shoe.rating}</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Descripción</Text>
      <Text style={styles.descriptionText}>{shoe.description}</Text>

      <Text style={styles.sectionTitle}>Tallas</Text>
      <View style={styles.sizeContainer}>
        {shoe.size.map((size) => (
          <TouchableOpacity
            key={size}
            onPress={() => handleSizeSelection(size)}
            style={[
              styles.sizeButton,
              {
                backgroundColor:
                  selectedSize === size ? theme.colors.black : "transparent",
              },
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                {
                  color: selectedSize === size ? "white" : theme.colors.black,
                },
              ]}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          style={styles.cartContainer}
          onPress={handleAddToCart}
        >
          <FontAwesome5
            name="shopping-cart"
            size={24}
            color={theme.colors.black}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyContainer}>
          <Text style={styles.buyText}>Comprar Ahora</Text>
        </TouchableOpacity>
      </View>
      <CartListModal />
    </View>
  );
};

export default ShoeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.defaultBackground,
    paddingHorizontal: scale(10),
    paddingTop: verticalScale(50),
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  goBackButton: {
    padding: scale(8),
    borderWidth: 1,
    borderRadius: scale(10),
    borderColor: "rgba(0,0,0,0.1)",
    position: "absolute",
    left: scale(10),
  },
  headerText: {
    fontSize: scale(20),
    fontWeight: "500",
    color: theme.colors.black,
    marginLeft: scale(10),
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: verticalScale(20),
    backgroundColor: "rgba(0,0,0,0.03)",
    padding: scale(10),
    borderRadius: scale(10),
  },
  shoeImage: {
    width: "100%",
    height: verticalScale(300),
    resizeMode: "contain",
  },
  shoeName: {
    fontSize: scale(20),
    fontWeight: "bold",
    color: theme.colors.black,
  },
  shoeBrand: {
    fontSize: scale(16),
    fontWeight: "500",
    color: theme.colors.gray,
  },
  shoePriceContainer: {
    alignItems: "flex-end",
  },
  originalPrice: {
    fontSize: scale(16),
    color: theme.colors.gray,
    textDecorationLine: "line-through",
    fontWeight: "500",
  },
  discountedPrice: {
    fontSize: scale(25),
    color: theme.colors.black,
    fontWeight: "500",
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: verticalScale(10),
    // marginRight: scale(20),
  },
  detailText: {
    fontSize: scale(14),
    fontWeight: "500",
    color: theme.colors.black,
    opacity: 0.8,
    marginLeft: scale(5),
  },
  sectionTitle: {
    fontSize: scale(18),
    fontWeight: "bold",
    color: theme.colors.black,
    marginVertical: verticalScale(10),
  },
  descriptionText: {
    fontSize: scale(16),
    color: theme.colors.black,
    opacity: 0.8,
  },
  sizeContainer: {
    flexDirection: "row",
    // justifyContent: "fl",
    flexWrap: "wrap",
    marginVertical: verticalScale(10),
  },
  sizeButton: {
    width: scale(40),
    height: scale(40),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: theme.colors.secundaryBackground,
    margin: scale(5),
  },
  sizeText: {
    fontSize: scale(16),
    fontWeight: "500",
  },
  actionButtonsContainer: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: verticalScale(30),
    alignSelf: "center",
  },
  cartContainer: {
    width: scale(50),
    height: "100%",
    borderRadius: scale(10),
    marginRight: scale(10),
    borderWidth: 1,
    borderColor: theme.colors.secundaryBackground,
    alignItems: "center",
    justifyContent: "center",
  },
  buyContainer: {
    backgroundColor: theme.colors.black,
    paddingVertical: scale(20),
    borderRadius: scale(10),
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buyText: {
    fontSize: scale(16),
    fontWeight: "500",
    color: "white",
  },
});
