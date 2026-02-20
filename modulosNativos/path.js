//demonstração do uso do módulo path, que é um módulo nativo do Node.js para trabalhar com caminhos de arquivos e diretórios
const path=require("path")

//o método join é usado para juntar vários segmentos em um único caminho
const caminhoCompleto=path.join("/home/user","documents","file.txt")
console.log(`1. o caminho completo do arquivo é: ${caminhoCompleto}`) 

//o método extname é usado para obter a extensão de um arquivo
const extensao=path.extname("file.txt")
console.log(`2. a extensão do arquivo é: ${extensao}`) 

//o método basename é usado para obter o nome do arquivo sem a extensão
const nomeArquivo=path.basename("file.txt",".txt")
console.log(`3. o nome do arquivo é: ${nomeArquivo}`) 

//o método dirname é usado para obter o diretório de um caminho   
const diretorio=path.dirname("/home/user/documents/file.txt")
console.log(`4. o diretório do arquivo é: ${diretorio}`) //imprime o diretório do arquivo, que é /home/user/documents

//o método parse é usado para analisar um caminho e retornar um objeto com as partes do caminho
const partesCaminho=path.parse("/home/user/documents/file.txt")
console.log(`5. as partes do caminho são: ${JSON.stringify(partesCaminho, null, 2)}`) 
