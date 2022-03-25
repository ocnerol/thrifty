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
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import defaultStyles from "../config/styles";
import listingsApi from "../api/listings";

const validationSchema = Yup.object().shape({
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().optional().label("Description"),
  images: Yup.array().min(1, "Please select at least one image"),
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
  const location = useLocation();

  const handleSubmit = async (listing) => {
    const result = await listingsApi.addListing({ ...listing, location });
    if (!result.ok) {
      return alert("Could not save the listing.");
    }
    alert("Success!");
  };

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          category: null,
          description: "",
          images: [],
          price: "",
          title: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
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
    backgroundColor: defaultStyles.colors.white,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
