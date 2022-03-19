import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  category: Yup.object().nullable().required().label("Category"),
  description: Yup.string().optional().label("Description"),
  price: Yup.number()
    .integer()
    .moreThan(0)
    .lessThan(10000)
    .required()
    .label("Price"),
  title: Yup.string().required().min(1).label("Title"),
});

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ category: "", description: "", price: 0, title: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          name="title"
          placeholder="Title"
          textContentType="none"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          name="price"
          placeholder="Price"
          textContentType="none"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={true}
          keyboardType="default"
          name="category"
          placeholder="Category"
          textContentType="none"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={true}
          keyboardType="default"
          name="description"
          placeholder="Description"
          textContentType="none"
        />
        <SubmitButton title="Post" />
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