import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";

import AppButton from "../components/AppButton";

const backgroundImage = require("../assets/background.jpg");
const logo = require("../assets/logo-red.png");

export default function WelcomeScreen({ toLoginScreen, toRegisterScreen }) {
  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={backgroundImage}
      blurRadius={10}
    >
      <View style={styles.logoAndTagline}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="login" onPress={toLoginScreen} />
        <AppButton
          title="register"
          color="secondary"
          onPress={toRegisterScreen}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoAndTagline: {
    top: 80,
    position: "absolute",
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 15,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 5,
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
});
