import dotenv from 'dotenv'
import koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import mongo from 'koa-mongo';

import typeDefs from "./schemas/schema.js"
import resolvers from "./resolver/resolve.js"

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ctx}) => ctx
})

dotenv.config()
const app = new koa()
app.use(mongo({
    host: `${process.env.DB_HOST}`,
    port: `${process.env.DB_PORT}`,
    user: `${process.env.DB_USER}`,
    db: `${process.env.DB_NAME}`,
    max: 100,
    min: 1
}))
server.applyMiddleware({ app })

app.listen(process.env.PORT, () => console.log(`connect to port ${process.env.PORT} success!!`))