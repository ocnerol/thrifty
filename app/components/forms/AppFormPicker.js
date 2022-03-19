import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";

export default function AppFormPicker({ items, name, placeholder }) {
  const { setFieldValue, values } = useFormikContext();

  return (
    <AppPicker
      onSelectItem={(item) => setFieldValue(name, item)}
      placeholder={placeholder}
      items={items}
      selectedItem={values[name]}
    />
  );
}

const styles = StyleSheet.create({});
