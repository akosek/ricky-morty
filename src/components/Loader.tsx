// Components
import { StyleSheet, ActivityIndicator, View } from "react-native";

import theme from "../theme";
const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Loader;
