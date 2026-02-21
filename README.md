# node2026 - Curso de Web Dinâmico 2026

Um projeto educacional completo de Node.js explorando conceitos fundamentais de desenvolvimento web, incluindo JavaScript básico, programação no servidor com Express, operações com sistema de arquivos e módulos nativos do Node.js.

## Sobre Este Projeto

Este repositório educacional foi desenvolvido para demonstrar e praticar:
- **JavaScript Básico**: Conceitos e fundamentos da linguagem
- **Módulos Node.js**: Módulos nativos (fs, http, path) e módulos personalizados
- **Express.js**: Construindo servidores web dinâmicos com roteamento
- **Operações com Sistema de Arquivos**: Leitura e escrita de dados JSON
- **APIs REST**: Criando rotas e manipulando requisições HTTP

## Estrutura do Projeto

### 📂 `basico/`
Introdução aos fundamentos de JavaScript:
- `hello.js` - Programa Hello World
- `mat.js` - Operações matemáticas
- `nome.js` - Manipulação de strings e variáveis

### 📂 `modulosNativos/`
Módulos nativos do Node.js:
- `fs.js` - Exemplo do módulo File System
- `http.js` - Módulo HTTP para criar servidores
- `path.js` - Utilitários para trabalhar com caminhos de arquivos

### 📂 `modulosDev/`
Módulos personalizados de cálculo:
- `soma.js` - Adição
- `sub.js` - Subtração
- `mult.js` - Multiplicação
- `div.js` - Divisão
- `calc.js` - Interface principal da calculadora
- `calcModulo.js` - Implementação modular da calculadora

### 📂 `json/`
Trabalhando com dados JSON:
- `fs.js` - Operações com sistema de arquivos para JSON
- `people.json` - Dados de exemplo (lista de pessoas)
- `peopletable.js` - Script para exibir dados de pessoas em uma tabela
- `peopletable.html` - Saída HTML da tabela de pessoas

### 📂 `express/`
Construindo um servidor web com Express:
- `server.js` - Configuração principal do servidor Express
- `express-rotas.js` - Exemplos de roteamento com Express
- `restaurante-rotas.js` - Roteamento de API de restaurante
- `html/` - Templates HTML
  - `home.html` - Página inicial
  - `cardapio.html` - Cardápio/Listagem de restaurantes
  - `fale.html` - Página de contato/Mensagens

## Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/BiancaPedrosa/node2026.git
cd node2026
```

2. **Instale as dependências:**
```bash
npm install
```

## Começando

### Execute Exemplos Básicos
```bash
# Hello World
node basico/hello.js

# Operações matemáticas
node basico/mat.js

# Operações com strings
node basico/nome.js
```

### Explore os Módulos Nativos
```bash
# Servidor HTTP
node modulosNativos/http.js

# Operações com Sistema de Arquivos
node modulosNativos/fs.js
```

### Teste os Módulos Personalizados
```bash
# Calculadora
node modulosDev/calc.js
node modulosDev/calcModulo.js
```

### Trabalhe com Dados JSON
```bash
# Exiba a tabela de pessoas
node json/peopletable.js
```

### Inicie o Servidor Express
```bash
npm start
# ou
node express/server.js
```

O servidor será executado em `http://localhost:3000`

## Rotas Disponíveis (Express)

- `/` - Página inicial
- `/cardapio` - Cardápio/Listagem de restaurantes
- `/fale` - Página de contato/Mensagens

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express.js** (v5.2.1) - Framework web para aplicações
- **HTML** - Templates do frontend
- **JSON** - Formato de dados

## Requisitos

- Node.js (v14 ou superior recomendado)
- npm ou yarn

## Licença

ISC

## Autor

Bianca Pedrosa

## Repositório

[github.com/BiancaPedrosa/node2026](https://github.com/BiancaPedrosa/node2026)