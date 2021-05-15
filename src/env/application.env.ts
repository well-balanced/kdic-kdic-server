import env from 'env-var'

export const PORT = env.get('PORT').default(3000).asPortNumber()
export const API_BASE_URL = env
  .get('API_BASE_URL')
  .default('http://localhost:3000')
  .asString()
