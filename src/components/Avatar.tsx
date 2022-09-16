// Components
import { StyleSheet, View, Image } from "react-native";

export type Props = {
  image: string;
  size?: string;
  label?: string;
  row?: boolean;
};

const Avatar = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.image }}
        style={[
          styles.image,
          props.row ? styles.imageRow : styles.imageColumn,
          props.size === "small" ? styles.small : styles.normal,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    borderRadius: 100,
  },
  imageRow: {
    marginRight: 15,
  },
  imageColumn: {
    marginBottom: 10,
  },
  normal: {
    width: 150,
    height: 150,
  },
  small: {
    width: 75,
    height: 75,
  },
});

export default Avatar;
