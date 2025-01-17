import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import theme from "../../utils/theme";
import {
  moderateScale,
  scale,
  verticalScale,
} from "../../utils/dynamicScaling";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import authRepository from "../../repositories/authRepository";

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleNavigateSignup = () => {
    navigation.navigate("Signup");
  };

  const handleLogin = async () => {
    const result = await authRepository.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );

    console.log("Result: ", result);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImg}
        source={require("../../assets/background-1.jpg")}
      />
      <Text style={styles.title}>Inicia sesión</Text>
      <Text style={styles.subtitle}>Ingresa tus datos para continuar</Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={credentials.email}
          onChangeText={(e) => {
            setCredentials({ ...credentials, email: e });
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={credentials.password}
          onChangeText={(e) => {
            setCredentials({ ...credentials, password: e });
          }}
        />
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
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
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
        <TouchableOpacity onPress={handleNavigateSignup}>
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

export default LoginScreen;

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
