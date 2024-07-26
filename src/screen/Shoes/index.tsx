import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import Tabbar from "../../components/Tabbar";
import theme from "../../utils/theme";
import {
  moderateScale,
  scale,
  verticalScale,
} from "../../utils/dynamicScaling";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ShoesDataset from "../../../shoes.dataset";
import Shoe from "../../interfaces/ShoeInterface";
import ShoeItem from "../../components/ShoeItem";
import { useNavigation } from "@react-navigation/native";

const ShoesScreen = () => {
  const [filteredShoes, setFilteredShoes] = useState<Shoe[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const filterResult = ShoesDataset.filter((shoe: Shoe) =>
      shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredShoes(filterResult);
  }, [searchQuery]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos los tenis</Text>
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons
          name="magnify"
          size={24}
          color={theme.colors.gray}
        />
        <TextInput
          placeholder="Buscar tenis..."
          style={styles.searchInput}
          placeholderTextColor={theme.colors.gray}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.shoesContainer}>
        <FlatList
          data={filteredShoes}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <ShoeItem shoe={item} navigation={navigation} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Tabbar />
    </View>
  );
};

export default ShoesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.defaultBackground,
    paddingHorizontal: scale(10),
    paddingTop: verticalScale(60),
    paddingBottom: verticalScale(90),
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: theme.colors.black,
    marginBottom: verticalScale(20),
    textAlign: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    borderRadius: scale(10),
    paddingHorizontal: scale(10),
  },
  searchInput: {
    flex: 1,
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(10),
    color: theme.colors.black,
    fontWeight: "500",
    fontSize: moderateScale(16),
  },
  shoesContainer: {
    flex: 1,
    marginTop: verticalScale(20),
  },
});
