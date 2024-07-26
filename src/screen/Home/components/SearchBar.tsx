import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import theme from "../../../utils/theme";
import { scale, verticalScale } from "../../../utils/dynamicScaling";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Feather name="search" size={18} color={theme.colors.gray} />
        <TextInput
          style={styles.input}
          placeholder="Busca tus pares de zapatos..."
          placeholderTextColor={theme.colors.gray}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Feather name="filter" size={20} color={theme.colors.secundary} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: verticalScale(20),
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.secundaryBackground,
    borderRadius: scale(10),
    paddingHorizontal: scale(10),
    marginRight: scale(10),
    flex: 1,
  },
  input: {
    flex: 1,
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
  },
  buttonContainer: {
    backgroundColor: theme.colors.black,
    borderRadius: scale(10),
    padding: scale(10),
  },
});
