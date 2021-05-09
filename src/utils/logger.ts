import { createLogger, transports } from 'winston'
import winstonDailyRotateFile from 'winston-daily-rotate-file'

const console = new transports.Console({ level: 'debug' })

const consoleRotateFile = new winstonDailyRotateFile({
  dirname: './logs',
  filename: 'app-console-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  maxFiles: '3d',
})

let option

switch (process.env.NODE_ENV) {
  case 'development':
    option = {
      level: 'debug',
      transports: [console],
    }
    break
  case 'production':
    option = {
      level: 'warn',
      transports: [consoleRotateFile],
    }
    break
  default:
    option = {
      level: 'info',
      transports: [console],
    }
    break
}

const logger = createLogger(option)

export { logger }
