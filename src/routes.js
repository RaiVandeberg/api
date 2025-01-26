import {parseRoutePath} from "./utils/parseRoutepath.js"

export const routes = [
    {
        method: "GET",
        path: "/produtcs",
        controller: ({req, res, database}) => {
            const produtcs = database.select("produtcs")
            return res.end(JSON.stringify(produtcs))

        },
    },

    {
        method: "POST",
        path: "/produtcs",
        controller: ({req, res, database}) => {
            const {name, price} = req.body

            database.insert("produtcs", {name, price})

            return res.writeHead(201).end()
        },
    },

    {
        method: "DELETE",
        path: "/produtcs/:id",
        controller: ({req, res}) => {
            return res.end("Produto removido com ID: " + req.params.id)
        },
    },
].map((route) => ({
    ...route,
    path: parseRoutePath(route.path),
}))