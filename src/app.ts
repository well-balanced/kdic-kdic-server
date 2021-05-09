import express, { Application } from 'express'
import errorhandler from 'errorhandler'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import {
  ApolloServer,
  ApolloServerExpressConfig,
  ServerRegistration,
} from 'apollo-server-express'
import { allSchema } from './graphql/schema'
import bodyParser from 'body-parser'
import cors, { CorsOptions } from 'cors'
import { MongooseDataloaderFactory } from 'graphql-dataloader-mongoose'
import { logger } from './utils/logger'

export function createApplication() {
  const app = express()
  app.set('port', process.env.PORT || 3000)
  app.set('env', process.env.NODE_ENV || 'development')

  if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler())
  }

  app.use(cookieParser())
  app.use(compression())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  const corsOptions: CorsOptions = {
    origin: true,
    credentials: true,
  }
  app.use(cors(corsOptions))

  applyApollo(app)

  return app
}

function applyApollo(app: Application) {
  const apolloConfig: ApolloServerExpressConfig = {
    schema: allSchema,
    context: async ctx => {
      const dataloaderFactory = new MongooseDataloaderFactory()
      return { ...ctx, dataloaderFactory }
    },
    formatError: error => {
      logger.error(`[Graphql ERROR] ${error}`)
      return error
    },
  }

  const apolloRegistration: ServerRegistration = {
    app,
    path: '/graphql',
    cors: true,
    bodyParserConfig: true,
  }

  const apollo = new ApolloServer(apolloConfig)
  apollo.applyMiddleware(apolloRegistration)
}
