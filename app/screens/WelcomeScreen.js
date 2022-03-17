import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";
import AppText from "../components/AppText";

import AppButton from "../components/AppButton";

const backgroundImage = require("../assets/background.jpg");
const logo = require("../assets/logo-red.png");

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={backgroundImage}
      blurRadius={8}
    >
      <View style={styles.logoAndTagline}>
        <Image source={logo} style={styles.logo} />
        <AppText>Sell What You Don't Need</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="login"
          color="primary"
          onPress={() => console.log("tapped")}
        />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => console.log("tapped")}
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
  buttonsContainer: {
    width: "100%",
    marginBottom: 18,
    alignItems: "center",
  },
});
