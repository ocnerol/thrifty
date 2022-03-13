import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";

const backgroundImage = require("../assets/background.jpg");
const logo = require("../assets/logo-red.png");

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={backgroundImage}
    >
      <View style={styles.logoAndTagline}>
        <Image source={logo} style={styles.logo} />
        <Text>{"Sell What You Don't Need"}</Text>
      </View>
      <View style={styles.login}></View>
      <View style={styles.register}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoAndTagline: {
    top: 80,
    height: 150,
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    height: "60%",
    width: "60%",
  },
  login: {
    backgroundColor: "#fc5c65",
    height: 65,
    width: "100%",
  },
  register: {
    backgroundColor: "#4ECDC4",
    height: 65,
    width: "100%",
  },
});
