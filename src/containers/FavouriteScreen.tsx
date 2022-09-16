import React from "react";
// Redux
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
//Types
import { TCharacterItem } from "../../types";
// Components
import { StyleSheet, View } from "react-native";
import ItemList from "../components/ItemList";

const FavouriteScreen = ({ navigation }) => {
  const favList = useSelector<RootState, TCharacterItem[]>(
    (state) => state.characters.favList
  );

  return (
    <View style={styles.container}>
      <ItemList listData={favList} navigation={navigation} columns={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default FavouriteScreen;
