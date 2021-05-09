import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    buzzword(buzzwordId: String!): Buzzword
    buzzwords: [Buzzword]
  }

  type Mutation {
    buzzwordCreate(buzzword: BuzzwordInput!): Buzzword
    buzzwordUpdate(buzzword: BuzzwordInput!): Buzzword
    buzzwordDelete(buzzwordId: String!): Boolean
  }

  type Buzzword {
    _id: ID!
    buzzwordId: String
    name: String
    meaning: String
  }

  input BuzzwordInput {
    buzzwordId: String!
    name: String!
    meaning: String!
  }
`

export { typeDefs }
