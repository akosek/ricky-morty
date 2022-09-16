// Components
import { StyleSheet, View, TextInput } from "react-native";
import IconButton from "./IconButton";
// Utils
import theme from "../theme";

export type Props = {
  search: () => void;
  clear: () => void;
  value: string | null;
  setInput: (input: string) => string;
};

const SearchForm = (props: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={props.value}
        onChangeText={props.setInput}
        style={styles.inputField}
        placeholder="Insert name"
        placeholderTextColor="white"
      />
      {props.value !== null && (
        <IconButton
          icon="times"
          color="white"
          size={20}
          onClick={props.clear}
        />
      )}
      <IconButton
        icon="search"
        color="white"
        size={20}
        onClick={props.search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: "center",
    backgroundColor: theme.colors.black,
  },
  inputField: {
    height: 25,
    flex: 2,
    borderBottomWidth: 2,
    color: theme.colors.white,
    borderColor: theme.colors.white,
  },
});

export default SearchForm;
