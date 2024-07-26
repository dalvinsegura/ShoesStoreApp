import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Header from "./components/Header";
import { scale, verticalScale } from "../../utils/dynamicScaling";
import theme from "../../utils/theme";
import SearchBar from "./components/SearchBar";
import ShoesDataset from "../../../shoes.dataset";
import ShoeItem from "../../components/ShoeItem";
import Tabbar from "../../components/Tabbar";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Header />
        <SearchBar />
        <View
          style={{
            width: "100%",
            height: verticalScale(200),
            backgroundColor: theme.colors.primary,
            borderRadius: scale(10),
            marginVertical: verticalScale(20),
          }}
        />
        <FlatList
          data={ShoesDataset}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <ShoeItem shoe={item} navigation={navigation} />
          )}
          // add a gap between the items
          contentContainerStyle={
            {
              // alignItems: "center",
              // justifyContent: "space-between",
            }
          }
          numColumns={2}
        />
      </View>
      <Tabbar />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.defaultBackground,
    paddingHorizontal: scale(10),
  },
});
