import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";

import WelcomeScreenButton from "../components/WelcomeScreenButton";

const backgroundImage = require("../assets/background.jpg");
const logo = require("../assets/logo-red.png");

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={backgroundImage}
    >
      <View style={styles.logoAndTagline}>
        <Image source={logo} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <WelcomeScreenButton color="primary">LOGIN</WelcomeScreenButton>
        <WelcomeScreenButton color="secondary">REGISTER</WelcomeScreenButton>
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
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 15,
  },
});
