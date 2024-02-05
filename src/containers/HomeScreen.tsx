import React, { useState, useEffect } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { TCharacterItem } from "../../types";
import { setStatusFilter, setPageCount } from "../redux/ducks/characters";

// Components
import { StyleSheet, View } from "react-native";
import ItemList from "../components/ItemList";
import Loader from "../components/Loader";
import SearchForm from "../components/SearchForm";
import PaginationButton from "../components/PaginationButton";
import StatusFilter from "../components/StatusFilter";
//Utils
import theme from "../theme";
// GraphQL
import { useLazyQuery } from "@apollo/client";
import {
  GET_ALL_CHARACTERS,
  FILTER_BY_NAME,
  FILTER_BY_STATUS,
} from "../graphql/getData";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [allPages, setAllPages] = useState(0);
  const [input, setInput] = useState<string | null>(null);
  const [homeData, setHomeData] = useState<TCharacterItem[]>([]);

  const selectedFilter = useSelector<RootState, string>(
    (state) => state.characters.selectedFilter
  );

  const pageCount = useSelector<RootState, number>(
    (state) => state.characters.pageCount
  );

  const listView = useSelector<RootState, number>(
    (state) => state.characters.listView
  );

  // Get All Characters
  const [getAllData, { loading: loadingAllData }] = useLazyQuery(
    GET_ALL_CHARACTERS,
    {
      onCompleted: (data) => {
        const charactersData = data?.characters.results;
        const dataInfo = data?.characters.info;
        setAllPages(dataInfo);
        setHomeData(charactersData);
      },
    }
  );

  // Get Characters from user input
  const [executeSearch, { loading: loadingSearch }] = useLazyQuery(
    FILTER_BY_NAME,
    {
      onCompleted: (data) => {
        const searchedData = data?.characters.results;
        const dataInfo = data?.characters.info;
        setAllPages(dataInfo);
        setHomeData(searchedData);
      },
    }
  );

  // Get Characters from status filter
  const [executeStatusFilter, { loading: loadingFilterData }] = useLazyQuery(
    FILTER_BY_STATUS,
    {
      onCompleted: (data) => {
        const filteredData = data?.characters.results;
        const dataInfo = data?.characters.info;
        setAllPages(dataInfo);
        if (filteredData) {
          setHomeData(filteredData);
        }
      },
    }
  );

  const handleSearch = () => {
    dispatch(setPageCount(1));
    dispatch(setStatusFilter(""));
    executeSearch({
      variables: { name: input, page: pageCount },
    });
  };

  const clearSearch = () => {
    setInput(null);
    dispatch(setStatusFilter(""));
    dispatch(setPageCount(1));
    getAllData({
      variables: {
        page: pageCount,
      },
    });
  };

  const handleFilterSearch = (value) => {
    setInput(null);
    dispatch(setPageCount(1));
    dispatch(setStatusFilter(value));
    fetchData();
  };

  const fetchData = () => {
    if (selectedFilter !== "") {
      executeStatusFilter({
        variables: {
          status: selectedFilter,
          page: pageCount,
        },
      });
    } else if (input !== null) {
      executeSearch({
        variables: { name: input, page: pageCount },
      });
    } else if (input === null || selectedFilter === "") {
      getAllData({
        variables: {
          page: pageCount,
        },
      });
    }
  };

  const renderFooter = () => {
    return (
      <PaginationButton
        currentPage={pageCount}
        allPages={allPages?.pages}
        next={() => dispatch(setPageCount(pageCount + 1))}
        back={() => dispatch(setPageCount(pageCount - 1))}
      />
    );
  };

  useEffect(() => {
    fetchData();
  }, [pageCount, selectedFilter]);

  if (loadingAllData || loadingSearch || loadingFilterData) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <SearchForm
        value={input}
        setInput={setInput}
        search={handleSearch}
        clear={clearSearch}
      />
      <StatusFilter onSelect={(value) => handleFilterSearch(value)} />
      <ItemList
        listData={homeData}
        navigation={navigation}
        listFooter={renderFooter}
        columns={listView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
});

export default HomeScreen;
