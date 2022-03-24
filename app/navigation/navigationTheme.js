import { defaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

export default {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: colors.primary,
    backgroundColor: colors.white,
  },
};
