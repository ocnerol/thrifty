import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik } from "formik";

export default function AppForm({ initialValues, onSubmit, validationSchema }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    ></Formik>
  );
}

const styles = StyleSheet.create({});
