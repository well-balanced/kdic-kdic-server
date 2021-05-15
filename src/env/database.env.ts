import env from 'env-var'

export const MONGODB_HOST = env
  .get('MONGODB_HOST')
  .default('mongodb://localhost')
  .asString()
