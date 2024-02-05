import { gql } from "@apollo/client";

// FRAGMENTS
const CHARACTER_FIELDS = gql`
  fragment CharacterFields on Character {
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
      id
      name
    }
    episode {
      id
      episode
      name
    }
  }
`;

// QUERIES
export const GET_ALL_CHARACTERS = gql`
  ${CHARACTER_FIELDS}
  query getAllCharacters($page: Int) {
    characters(page: $page) {
      info {
        pages
      }
      results {
        ...CharacterFields
      }
    }
  }
`;

export const GET_SINGLE_DATA = gql`
  ${CHARACTER_FIELDS}
  query fetchCharacters($id: ID!) {
    character(id: $id) {
      ...CharacterFields
    }
  }
`;

export const FILTER_BY_NAME = gql`
  ${CHARACTER_FIELDS}
  query getCharacterByName($page: Int, $name: String!) {
    characters(filter: { name: $name }, page: $page) {
      info {
        pages
        count
      }
      results {
        ...CharacterFields
      }
    }
  }
`;

export const FILTER_BY_STATUS = gql`
  ${CHARACTER_FIELDS}
  query getCharacterByStatus($page: Int, $status: String!) {
    characters(filter: { status: $status }, page: $page) {
      info {
        pages
        count
      }
      results {
        ...CharacterFields
      }
    }
  }
`;
