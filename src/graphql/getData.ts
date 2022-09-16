import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query getAllCharacters($page: Int) {
    characters(page: $page) {
      info {
        pages
      }
      results {
        id
        name
        image
        status
        species
        origin {
          name
        }
        episode {
          id
          episode
          name
        }
      }
    }
  }
`;

export const GET_SINGLE_DATA = gql`
  query fetchCharacters($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      type
      gender
      location {
        name
      }
      origin {
        name
      }
      episode {
        name
        episode
      }
    }
  }
`;

export const FILTER_BY_NAME = gql`
  query getCharacterByName($page: Int, $name: String!) {
    characters(filter: { name: $name }, page: $page) {
      info {
        pages
        count
      }
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
        origin {
          id
          name
        }
        episode {
          id
          name
        }
      }
    }
  }
`;

export const FILTER_BY_STATUS = gql`
  query getCharacterByStatus($page: Int, $status: String!) {
    characters(filter: { status: $status }, page: $page) {
      info {
        pages
        count
      }
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
        origin {
          id
          name
        }
        episode {
          id
          name
        }
      }
    }
  }
`;
