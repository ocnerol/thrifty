import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({
  items,
  name,
  placeholder,
  width,
  gridStyle,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        items={items}
        selectedItem={values[name]}
        width={width}
        gridStyle={gridStyle}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
