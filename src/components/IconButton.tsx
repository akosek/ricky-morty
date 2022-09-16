// Components
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export type Props = {
  icon: string;
  onClick: () => void;
  size?: number;
  color?: string;
  customStyle?: object;
};

const IconButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.customStyle]}
      onPress={props.onClick}
    >
      <Icon name={props.icon} size={props.size} color={props.color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
});

export default IconButton;
