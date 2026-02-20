// Rotas em Express
express= require ("express");
const app = express();

// definindo as rotas para a página inicial, sobre e contato
// rotas get para receber requisições do tipo GET

//localhost:3000/
app.get("/", function (req, res) {
    res.send("Bem-vindo ao meu app!");
}
);
//localhost:3000/sobre
app.get("/sobre", function (req, res) {
    res.send("Essa é a página sobre!");
}
);
//localhost:3000/contato
app.get("/contato", function (req, res) {
    res.send("Essa é a página de contato!");
}
);
// rota com parâmetros
//localhost:3000/ola/João/Desenvolvedor
app.get('/ola/:nome/:cargo', function (req, res) {
    res.send("Olá " + req.params.nome + " seu cargo é " + req.params.cargo);
}
);

// rota com query string
//localhost:3000/busca?termo=express
app.get('/busca', function (req, res) {
    res.send("Você buscou por: " + req.query.termo);
}
);      

app.listen(3000, () => {
    console.log("Servidor rodando na url http://localhost:3000");
}
);