import { createApplication } from './app'

const app = createApplication()
const port = app.get('port')
const env = app.get('env')

app.listen(port, () => {
  console.log(`express server is listening port ${port} on the ${env} mode`)
})
