// Components
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Avatar from "./Avatar";
import IconButton from "./IconButton";
import ItemLabel from "./ItemLabel";

// Utils
import theme from "../theme";

export type Props = {
  content: any;
  onClick: () => void;
  isFavourite: boolean;
  addFavorite: () => void;
};

const ItemCardGrid = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onClick} style={styles.container}>
      <View style={styles.heartButton}>
        <IconButton
          icon={props.isFavourite ? "heart-o" : "heart"}
          color={theme.colors.pink}
          size={25}
          onClick={props.addFavorite}
        />
      </View>
      <View style={styles.avatarContainer}>
        <Avatar
          image={props.content.image}
          size={"small"}
          label={props.content.name}
        />
        <Text style={styles.itemName}>{props.content.name}</Text>
      </View>

      <View style={styles.labelRow}>
        <ItemLabel text={props.content.status} />
        <ItemLabel text={props.content.species} />
      </View>

      <Text style={styles.detailsInfo}>
        <Text style={styles.detailLabel}>Origin:</Text>{" "}
        {props.content.origin.name}
      </Text>
      <Text style={styles.detailsInfo}>
        <Text style={styles.detailLabel}>First Episode:</Text>{" "}
        {props.content.episode[0].name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: theme.colors.lightBlack,
    borderRightWidth: 2,
    borderRightColor: theme.colors.black,
  },
  itemName: {
    fontWeight: "bold",
    textAlign: "center",
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.label,
  },
  labelRow: {
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  detailsInfo: {
    marginBottom: 4,
    color: theme.colors.labelText,
    fontSize: theme.fontSizes.small,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  detailLabel: {
    fontSize: theme.fontSizes.small,
    fontWeight: "normal",
  },
  heartButton: {
    position: "absolute",
    right: 10,
    zIndex: 1000,
  },
  avatarContainer: {
    marginTop: 5,
    flexDirection: "column",
    alignItems: "center",
  },
});

export default ItemCardGrid;
