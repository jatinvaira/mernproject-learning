// src/graphql/queries.js
import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      firstName
      lastName
      age
      dateOfJoining
      title
      department
      employeeType
      
    }
  }
`;
