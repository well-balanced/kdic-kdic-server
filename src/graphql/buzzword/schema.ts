import { resolvers } from './resolver'
import { typeDefs } from './type'
import { makeExecutableSchema } from 'graphql-tools'

const buzzwordSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export { buzzwordSchema }
