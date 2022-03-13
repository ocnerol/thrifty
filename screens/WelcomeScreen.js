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
      {/* <View style={styles.logo}>
        <Image source={logo} style={{ resizeMode: "contain" }} />
        <Text>{"Sell What You Don't Need"}</Text>
      </View> */}
      <View style={styles.login}></View>
      <View style={styles.register}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    // top: ,
    // position: "absolute",
    // height: "auto",
    // width: 300,
    backgroundColor: "black",
  },
  login: {
    backgroundColor: "#fc5c65",
    height: 100,
    width: "100%",
  },
  register: {
    backgroundColor: "#4ECDC4",
    height: 100,
    width: "100%",
  },
});
