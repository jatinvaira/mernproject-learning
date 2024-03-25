// src/graphql/mutations.js
import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($input: UserInput) {
    createUser(input: $input) {
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
// export const DELETE_USER = gql`
//   mutation DeleteUser($id: ID!) {
//     deleteUser(id: $id) {
//       _id
//     }
//   }
// `;
// export const UPDATE_USER = gql`
//   mutation UpdateUser($id: ID!, $input: UserInput) {
//     updateUser(id: $id, input: $input) {
//       _id
//       firstName
//       lastName
//       age
//       dateOfJoining
//       title
//       department
//       employeeType
      
//     }
//   }
// `;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
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

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      _id
    }
  }
`;