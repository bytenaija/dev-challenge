import { gql } from 'apollo-boost';

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $name: String!, $email: String!) {
    updateUser(user: { id: $id, name: $name, email: $email })
  }
`;

export const USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      color
      name
      email
      image
      friends {
        id
        name
        image
        email
      }
      company {
        id
        name
      }
      address {
        zipCode
        city
        cityPrefix
        citySuffix
        streetName
        streetAddress
        streetSuffix
        streetPrefix
        secondaryAddress
        county
        country
        state
        latitude
        longitude
      }
    }
  }
`;

export const COMPANY = gql`
  query Company($id: ID!) {
    company(id: $id) {
      id
      color
      name
      bs
      suffice
      catchPhrase

      image
      employees {
        id
        name
        image
        email
      }
      address {
        zipCode
        city
        cityPrefix
        citySuffix
        streetName
        streetAddress
        streetSuffix
        streetPrefix
        secondaryAddress
        county
        country
        state
        latitude
        longitude
      }
    }
  }
`;
