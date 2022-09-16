// Components
import { StyleSheet, Text, View, Alert } from "react-native";
import IconButton from "./IconButton";
// Utils
import theme from "../theme";

export type Props = {
  next: () => void;
  back: () => void;
  currentPage: number;
  allPages: number;
};

const PaginationButton = (props: Props) => {
  return (
    <View style={styles.container}>
      <IconButton
        icon="angle-left"
        color="white"
        size={25}
        onClick={
          props.currentPage === 1
            ? () => Alert.alert("Click next to see more results")
            : props.back
        }
      />
      <Text style={styles.labelText}>
        {props.currentPage} / {props.allPages}
      </Text>
      <IconButton
        icon="angle-right"
        color="white"
        size={25}
        onClick={
          props.currentPage < props.allPages
            ? props.next
            : () => Alert.alert("There are no more results")
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  labelText: {
    padding: 2,
    color: theme.colors.labelText,
  },
});

export default PaginationButton;
