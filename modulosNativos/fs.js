//criando um módulo para ler e escrever arquivos usando o módulo fs do Node.js
const fs=require("fs")

//função para escrever um objeto javascript em um arquivo JSON
const writeJson = ({data,filename})=>{
   fs.writeFileSync(filename,JSON.stringify(data),(err)=>{
   if(err){
      console.log(err)
   }
   console.log("File written successfully")
   }
   )
}  
//exemplo de uso da função write para escrever um array de objetos em um arquivo JSON
const people=[
    {name:"John",age:30},
    {name:"Jane",age:25},
    {name:"Doe",age:40}
]
writeJson({data: people, filename:"people.json"})

//função para ler um arquivo JSON e retornar o conteúdo como um objeto JavaScript
function readJson(filename) {
   //verifica se o arquivo existe antes de tentar ler-lo, para evitar erros
   if (!fs.existsSync(filename)) { 
      console.log("File does not exist")
      return null
   }
   else {
      const data = fs.readFileSync(filename, "utf8")
      if (data) {
         return JSON.parse(data)
      }
      return null
   }
}
//exemplo de uso da função readJson para ler o conteúdo do arquivo JSON
const readData = readJson("people.json")
console.log("Data read from file:", readData)

