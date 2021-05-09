import {
  getBuzzword,
  getBuzzwordList,
  createBuzzword,
  updateBuzzword,
  deleteBuzzword,
} from '../../resources/buzzword/index'
import { IBuzzword } from '../../resources/buzzword/model'

const resolvers = {
  Query: {
    buzzword: (_: any, { buzzwordId }: { buzzwordId: string }) =>
      getBuzzword(buzzwordId),
    buzzwords: () => getBuzzwordList(),
  },
  Mutation: {
    buzzwordCreate: (_: any, { buzzword }: { buzzword: IBuzzword }) =>
      createBuzzword(buzzword),
    buzzwordUpdate: (_: any, { buzzword }: { buzzword: IBuzzword }) =>
      updateBuzzword(buzzword),
    buzzwordDelete: (_: any, { buzzwordId }: { buzzwordId: string }) =>
      deleteBuzzword(buzzwordId),
  },
}

export { resolvers }
