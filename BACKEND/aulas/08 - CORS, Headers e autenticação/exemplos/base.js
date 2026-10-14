//codigo compartilhado pelos exemplos
//usado para definir as rotas e logar as informacoes

function registrarRotas(app) {
    app.get('/usuarios', function (req, res) {
        res.json([
            { id: 1, nome: "Ana" },
            { id: 2, nome: "Bruno" },
        ])
    })
}

function criarLogger(nome) {
    return function logger(req, res, next) {
        const origem = req.headers.origin || "(Sem origem)"
        res.on('finish', () => {
            console.log(`[${nome}] ${req.method.padEnd(7)} ${req.url.padEnd(14)} ` +
                `Origin: ${origem.padEnd(23)} -> ${res.statusCode}`)
        })
        next()
    }
}

export {registrarRotas, criarLogger};