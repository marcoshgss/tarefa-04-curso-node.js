const express = require("express")
const app = express()
const port = 5000

const path = require("path")

// arquivos estáticos 
app.use(express.static("public")) // é responsável por ler os arquivos guardados na pasta public 

const basePath = path.join(__dirname, 'templates')

app.get("/users/:id", (req, res) => { // nova rota. OBS: as rotas criadas, devem sempre ficar acima da rota da home principal.

  const id = req.params.id // buscando um parâmetro, no caso o id do usuário.

  // leitura da tabela users, resgata um usuário
  console.log(`Estamos buscando pelo usuário: ${id}`)
  
  res.sendFile(`${basePath}/users.html`) 
})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})