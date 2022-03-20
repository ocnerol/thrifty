import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as FormPicker,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().optional().label("Description"),
  price: Yup.number().min(1).max(10000).required().label("Price"),
  title: Yup.string().required().min(1).label("Title"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          category: null,
          description: "",
          price: "",
          title: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={"30%"}
        />
        <FormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width={"50%"}
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
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
