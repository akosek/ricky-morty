import React from "react";
//Components
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Navigation from "./src/containers/Navigation";
import { LogBox } from "react-native";
// Redux
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
// graphQl
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// Utils
import theme from "./src/theme";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  StatusBar.setBarStyle("light-content", true);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} />
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </ApolloProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
});
