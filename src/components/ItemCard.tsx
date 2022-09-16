// Components
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Avatar from "./Avatar";
import IconButton from "./IconButton";
import ItemLabel from "./ItemLabel";
import LabelText from "./LabelText";
// Utils
import theme from "../theme";

export type Props = {
  content: any;
  onClick: () => void;
  isFavourite: boolean;
  addFavorite: () => void;
};

const ItemCard = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onClick} style={styles.container}>
      <View style={styles.header}>
        <Avatar
          image={props.content.image}
          size={"small"}
          label={props.content.name}
          row
        />
        <View style={styles.headerInfo}>
          <Text style={styles.itemName}>{props.content.name}</Text>
          <View style={styles.labelRow}>
            <ItemLabel text={props.content.status} />
            <ItemLabel text={props.content.species} />
          </View>
        </View>
        <IconButton
          icon={props.isFavourite ? "heart-o" : "heart"}
          color={theme.colors.pink}
          size={25}
          onClick={props.addFavorite}
        />
      </View>
      <View style={styles.details}>
        <LabelText
          label="Origin:"
          value={props.content.origin.name}
          customStyle={styles.labelInfo}
        />
        <LabelText
          label="First Episode:"
          value={props.content.episode[0].name}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: theme.colors.lightBlack,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  headerInfo: {
    justifyContent: "center",
    flex: 3,
  },
  itemName: {
    fontWeight: "bold",
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
  },
  labelRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  details: {
    marginVertical: 5,
  },
  labelInfo: {
    marginBottom: 4,
  },
});

export default ItemCard;
