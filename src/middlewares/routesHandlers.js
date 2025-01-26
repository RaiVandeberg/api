import { routes } from "../routes.js";
import { extractQueryParams } from "../utils/extratc-query-params.js";
import { DataBase } from "../database.js";

const database = new DataBase()

export function routesHandler(req, res) {
    const route = routes.find((route) => {
        return route.method === req.method && route.path.test(req.url)
    })

    if(route){
        const routeParams = req.url.match(route.path)
        
        const { query, ...params} = routeParams.groups
        
        
        

        req.params = params

        req.query = query ? extractQueryParams(query) : {}

        return route.controller({req, res, database})
    }

    return res.writeHead(404).end("Produto não encontrado")
}