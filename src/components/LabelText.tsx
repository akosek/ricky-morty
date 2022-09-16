// Components
import { StyleSheet, Text, View } from "react-native";
// Utils
import theme from "../theme";
export type Props = {
  label: string;
  value: string;
  customStyle?: object;
};

const LabelText = (props: Props) => {
  return (
    <View style={[styles.container, props.customStyle]}>
      <Text style={styles.labelStyle}>{props.label}</Text>
      <Text style={styles.valueStyle}> {props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  labelStyle: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.white,
  },
  valueStyle: {
    textTransform: "capitalize",
    fontSize: theme.fontSizes.body,
    fontWeight: "600",
    color: theme.colors.white,
  },
});

export default LabelText;
