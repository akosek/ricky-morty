//Components
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconButton from "../components/IconButton";
// Screens
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import FavouriteScreen from "./FavouriteScreen";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setView } from "../redux/ducks/characters";
import { RootState } from "../redux/rootReducer";

// Utils
import theme from "../theme";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const customScreenOptions = {
  headerTitleStyle: { color: theme.colors.white },

  headerStyle: {
    backgroundColor: theme.colors.black,
    height: 50,
  },
  tabBarActiveTintColor: theme.colors.pink,
  tabBarStyle: {
    paddingVertical: 5,
    backgroundColor: theme.colors.black,
    borderTopWidth: 0,
  },
};

const HomeTabs = () => {
  const dispatch = useDispatch();
  const listView = useSelector<RootState, number>(
    (state) => state.characters.listView
  );

  return (
    <Tab.Navigator screenOptions={customScreenOptions}>
      <Tab.Screen
        name="All"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerRight: () => (
            <IconButton
              onClick={() => dispatch(setView(listView))}
              icon="magic"
              size={22}
              customStyle={{ marginRight: 15 }}
              color={theme.colors.white}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart-o" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={customScreenOptions}>
        <Stack.Screen
          name="HomTabs"
          component={HomeTabs}
          options={{
            headerShown: false,
            title: "All",
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerTintColor: theme.colors.pink }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
