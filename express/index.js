//importando o express
express= require ("express");
const app = express();

//definindo a rota para a página inicial
app.get("/", function (req, res) {
    res.send("<h1>Bem-vindo ao meu app!</h1>");
}
);
//iniciando o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando na url http://localhost:3000");
}
);