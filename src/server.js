import http from "http"
import { jsonBodyHandler } from "./middlewares/jsonHandler.js"
import { routesHandler } from "./middlewares/routesHandlers.js"

const server = http.createServer(async(req, res) => {
    await jsonBodyHandler(req, res)
    routesHandler(req, res)
})

server.listen(3333)