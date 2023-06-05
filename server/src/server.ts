/* eslint-disable prettier/prettier */
import fastify from "fastify"
import cors from "@fastify/cors"
import jwt from "@fastify/jwt"
import { memoriesRoutes } from "./routes/memories"
import multipart from "@fastify/multipart"
import fastifyStatic from "@fastify/static"
import "dotenv/config"
import { authRoutes } from "./routes/auth"
import { uploadRoutes } from "./routes/upload"
import { resolve } from "node:path"

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: `${process.env.JWT_SECRET}`,
})

app.register(multipart)
app.register(fastifyStatic, {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads'
})

app.register(memoriesRoutes)
app.register(authRoutes)
app.register(uploadRoutes)

app
  .listen({
    port: 3333,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("HTTP server running on http://localhost:3333");
  })
