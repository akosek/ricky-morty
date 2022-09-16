// Redux
import { useDispatch, useSelector } from "react-redux";
import { saveFavorites } from "../redux/ducks/characters";
import { TCharacterItem } from "../../types";
import { RootState } from "../redux/rootReducer";

// Components
import { StyleSheet, View, FlatList } from "react-native";
import ItemCard from "./ItemCard";
import ItemCardGrid from "./ItemCardGrid";

// Utils
import theme from "../theme";

export type Props = {
  listData: TCharacterItem[];
  navigation: any;
  columns?: number;
  listFooter?: any;
};

const ItemList = (props: Props) => {
  const dispatch = useDispatch();

  const favList = useSelector((state: RootState) => state.characters.favList);

  //Item Separator
  const ItemSeparatorView = () => {
    return <View style={styles.seperator} />;
  };

  const renderItemList = ({ item }) => {
    return (
      <ItemCard
        content={item}
        key={item.id}
        onClick={() =>
          props.navigation.navigate("Profile", { idParams: item.id })
        }
        addFavorite={() => addItem(item)}
        isFavourite={favList.indexOf(item) === -1 ? true : false}
      />
    );
  };

  const renderItemGrid = ({ item }) => {
    return (
      <ItemCardGrid
        content={item}
        key={item.id}
        onClick={() =>
          props.navigation.navigate("Profile", { idParams: item.id })
        }
        addFavorite={() => addItem(item)}
        isFavourite={favList.indexOf(item) === -1 ? true : false}
      />
    );
  };

  const addItem = (item: TCharacterItem) => {
    dispatch(saveFavorites(item));
  };

  return (
    <FlatList
      key={props.columns}
      data={props.listData}
      renderItem={props.columns === 1 ? renderItemList : renderItemGrid}
      numColumns={props.columns}
      ItemSeparatorComponent={ItemSeparatorView}
      style={{ backgroundColor: "black" }}
      ListFooterComponent={props.listFooter}
    />
  );
};

const styles = StyleSheet.create({
  seperator: {
    height: 2,
    width: "100%",
    backgroundColor: theme.colors.black,
  },
});

export default ItemList;
