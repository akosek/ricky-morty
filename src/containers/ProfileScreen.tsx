// Components
import { StyleSheet, Text, View } from "react-native";
import Avatar from "../components/Avatar";
import Loader from "../components/Loader";
import ItemLabel from "../components/ItemLabel";

// Utils
import theme from "../theme";
// GraphQL
import { useQuery } from "@apollo/client";
import { GET_SINGLE_DATA } from "../graphql/getData";

const ProfileScreen = ({ route, navigation }) => {
  const { idParams } = route.params;

  const { loading, data } = useQuery(GET_SINGLE_DATA, {
    variables: { id: Number(idParams) },
  });

  if (loading || !data || !data.character) {
    return <Loader />;
  }
  const character = data?.character;
  const episodes = data?.character.episode;
  const lastEpisode = episodes[episodes.length - 1];

  return (
    <View style={styles.container}>
      <Avatar image={character.image} />
      <Text style={styles.name}>{character.name}</Text>
      <View style={styles.profileRow}>
        <ItemLabel text={character.status} isBig />
        <ItemLabel text={character.species} isBig />
        <ItemLabel text={character.gender} isBig />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Locations</Text>
          </View>

          <Text style={styles.info}>
            Origin:
            <Text style={styles.infoDetail}> {character.origin.name}</Text>
          </Text>
          <Text style={styles.info}>
            Last Location:
            <Text style={styles.infoDetail}> {character.location.name}</Text>
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Episodes</Text>
          </View>
          <Text style={styles.info}>Number of Episodes: {episodes.length}</Text>
          <Text style={styles.info}>
            First: <Text style={styles.infoDetail}> {episodes[0].name}</Text>
          </Text>
          <Text style={styles.info}>
            Last: <Text style={styles.infoDetail}> {lastEpisode.name}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightBlack,
    paddingTop: 25,
  },
  name: {
    textAlign: "center",
    fontWeight: "bold",
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.header,
  },
  profileRow: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: theme.colors.black,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  info: {
    color: "#fff",
    paddingVertical: 4,
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.pink,
    paddingVertical: 5,
    borderStyle: "solid",
    marginBottom: 5,
  },
  sectionTitle: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.subheading,
  },
  infoContainer: {
    marginBottom: 25,
  },
  infoDetail: {
    fontWeight: "bold",
    fontSize: theme.fontSizes.body,
    textTransform: "capitalize",
    marginLeft: 4,
  },
});

export default ProfileScreen;
