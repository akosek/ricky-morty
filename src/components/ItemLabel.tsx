// Components
import { StyleSheet, Text, View } from "react-native";
// Utils
import theme from "../theme";

export type Props = {
  text: string;
  isBig?: boolean;
};

const ItemLabel = (props: Props) => {
  return (
    <View style={[styles.container, props.isBig && styles.bigContainer]}>
      <Text style={[styles.labelText, props.isBig && styles.bigLabel]}>
        {props.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black,
    minWidth: 70,
    borderRadius: 4,
    margin: 2,
    alignItems: "center",
  },
  bigContainer: {
    margin: 4,
    minWidth: 85,
  },
  labelText: {
    textTransform: "capitalize",
    color: theme.colors.labelText,
    padding: 4,
    fontSize: theme.fontSizes.body,
  },
  bigLabel: {
    padding: 6,
    fontSize: theme.fontSizes.label,
  },
});

export default ItemLabel;
