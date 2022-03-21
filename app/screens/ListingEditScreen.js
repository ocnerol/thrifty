import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppFormField as FormField,
  AppFormPicker as FormPicker,
  Form,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().optional().label("Description"),
  price: Yup.number().min(1).max(10000).required().label("Price"),
  title: Yup.string().required().min(1).label("Title"),
});

const categories = [
  {
    label: "Furniture",
    icon: "floor-lamp",
    color: "#fc5c65",
    value: 1,
  },
  {
    label: "Cars",
    icon: "car",
    color: "#fd9644",
    value: 2,
  },
  {
    label: "Cameras",
    icon: "camera",
    color: "#fed330",
    value: 3,
  },
  {
    label: "Games",
    icon: "cards",
    color: "#26de81",
    value: 4,
  },
  {
    label: "Clothing",
    icon: "shoe-heel",
    color: "#2bcbba",
    value: 5,
  },
  {
    label: "Sports",
    icon: "basketball",
    color: "#45aaf2",
    value: 6,
  },
  {
    label: "Movies & Music",
    icon: "headphones",
    color: "#4b7bec",
    value: 7,
  },
  {
    label: "Books",
    icon: "book-open-outline",
    value: 8,
  },
  {
    label: "Other",
    icon: "window-maximize",
    value: 9,
  },
];

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
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
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width={"50%"}
          gridStyle={true}
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
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
