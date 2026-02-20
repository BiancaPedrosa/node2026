//criando um servidor HTTP simples usando o módulo http do Node.js

//importando o módulo http, que é um módulo nativo do Node.js para criar servidores web
var http=require("http")

//o método createServer recebe uma função de callback que é executada toda vez que uma requisição é feita ao servidor   
//o objeto req representa a requisição feita pelo cliente,
//o objeto res representa a resposta que será enviada de volta para o cliente

const server = http.createServer(function (req, res) {
   //o método writeHead é usado para definir o status da resposta e os cabeçalhos HTTP
   ///o método end é usado para finalizar a resposta e enviar os dados de volta para o cliente
   res.writeHead(200, { "Content-Type": "text/html" });
   res.end("Ola dev!");  
   })

//o método listen é usado para iniciar o servidor e escutar as requisições na porta 8080
server.listen(8080);
   console.log("Servidor rodando em http://localhost:8080/");


