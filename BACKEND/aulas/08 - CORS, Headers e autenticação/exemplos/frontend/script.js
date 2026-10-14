// Servidor estático mínimo, só para a página index.html ter uma ORIGEM de verdade.
// Uso:  node front/front.js 5173     (ou 5174 para simular "outro front-end")

import http from "http";
import fs from "fs";
import path from "path";

const porta = 5174;

http
    .createServer((req, res) => {
        if (req.url === "/favicon.ico") {
            res.writeHead(204);
            return res.end();
        }
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        fs.createReadStream(path.join(import.meta.dirname, "index.html")).pipe(res);
    })
    .listen(porta, () => console.log(`Front-end em http://localhost:${porta}`));
