import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import theme from "../../utils/theme";
import {
  moderateScale,
  scale,
  verticalScale,
} from "../../utils/dynamicScaling";
import { Feather } from "@expo/vector-icons";

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImg}
        source={require("../../assets/background-1.jpg")}
      />
      <Text style={styles.title}>Crea tu cuenta</Text>
      <Text style={styles.subtitle}>Ingresa tus datos para continuar</Text>

      <View>
        <TextInput style={styles.input} placeholder="Nombre" />
        <TextInput style={styles.input} placeholder="Correo electrónico" />
        <TextInput style={styles.input} placeholder="Contraseña" />
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: scale(20),
            marginVertical: verticalScale(10),
            alignItems: "center",
          }}
        >
          <Feather name="alert-triangle" size={20} color="red" />
          <Text style={styles.errorText}>Correo o contraseña incorrectos</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: verticalScale(10),
        }}
      >
        <Text style={{ color: theme.colors.gray }}>¿No tienes una cuenta?</Text>
        <TouchableOpacity>
          <Text
            style={{
              color: theme.colors.black,
              fontWeight: "bold",
              marginLeft: scale(5),
            }}
          >
            Regístrate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.defaultBackground,
  },
  backgroundImg: {
    width: "100%",
    height: verticalScale(300),
    resizeMode: "cover",
  },
  title: {
    fontSize: moderateScale(24),
    color: theme.colors.black,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: verticalScale(30),
  },
  subtitle: {
    fontSize: scale(16),
    color: theme.colors.gray,
    textAlign: "center",
  },
  input: {
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(5),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray,
  },
  button: {
    backgroundColor: theme.colors.black,
    borderRadius: scale(10),
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
    padding: verticalScale(10),
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  errorText: {
    color: "red",
    marginLeft: scale(5),
  },
});
