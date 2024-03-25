// src/graphql/schema.js

import { gql } from '@apollo/client';

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    age: String!
    dateOfJoining: String!
    title: String!
    department: String!
    employeeType: String!
    
  }

  type Query {
    users: [User]
  }

  input UserInput {
    firstName: String!
    lastName: String!
    age: String!
    dateOfJoining: String!
    title: String!
    department: String!
    employeeType: String!
  }

  type Mutation {
    createUser(input: UserInput): User
    deleteUser(id: ID!): User
    updateUser(id: ID!, input: UserInput): User
  }
`;

export default typeDefs;
