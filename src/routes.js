import {parseRoutePath} from "./utils/parseRoutepath.js"

export const routes = [
    {
        method: "GET",
        path: "/produtcs",
        controller: (req, res) => {
            return res.end(JSON.stringify(req.query))

        },
    },

    {
        method: "POST",
        path: "/produtcs",
        controller: (req, res) => {
            return res.writeHead(201).end(JSON.stringify(req.body))
        },
    },

    {
        method: "DELETE",
        path: "/produtcs/:id",
        controller: (req, res) => {
            return res.end("Produto removido com ID: " + req.params.id)
        },
    },
].map((route) => ({
    ...route,
    path: parseRoutePath(route.path),
}))