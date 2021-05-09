import { mergeSchemas } from 'graphql-tools'
import { buzzwordSchema } from './buzzword/schema'

export const allSchema = mergeSchemas({
  schemas: [buzzwordSchema],
})
