import { fastifyCors } from '@fastify/cors'
import Fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'

const app = Fastify()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors)
// app.register(fastifyCors, {
//   origin: ''
// })

app.get('/', () => {
  return 'hello world'
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})
