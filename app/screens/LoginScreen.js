import { Image, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppFormField from "../components/forms/AppFormField";
import ErrorMessage from "../components/forms/ErrorMessage";
import Screen from "../components/Screen";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"), // label method takes label for displaying errors on this input field
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
