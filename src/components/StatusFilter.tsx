// Components
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// Redux
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
//Utils
import theme from "../theme";

export type Props = {
  onSelect: (item: string) => void;
};

let options = ["", "Alive", "Dead", "Unknown"];

const StatusFilter = (props: Props) => {
  const selectedFilter = useSelector<RootState, string>(
    (state) => state.characters.selectedFilter
  );

  const selectHandler = (value: string) => {
    props.onSelect(value);
  };

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          style={[styles.filter, selectedFilter === option && styles.selected]}
          key={option}
          onPress={() => selectHandler(option)}
        >
          <Text
            style={[
              styles.label,
              selectedFilter === option && styles.selectedLabel,
            ]}
          >
            {option === "" ? "All" : option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    marginHorizontal: 10,
    border: "none",
  },
  filter: {
    width: 80,
    alignItems: "center",
  },
  selected: { borderBottomColor: theme.colors.pink, borderBottomWidth: 2 },
  label: { padding: 4, color: theme.colors.pink },
  selectedLabel: { color: theme.colors.pink, fontWeight: "bold" },
});

export default StatusFilter;
