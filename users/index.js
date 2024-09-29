const express = require("express")
const router = express.Router()


const path = require("path")

const basePath = path.join(__dirname, '../templates')  // Aqui é onde vai ficar as páginas do html

router.get("/users/:id", (req, res) => { // nova rota. OBS: as rotas criadas, devem sempre ficar acima da rota da home principal.

  const id = req.params.id // buscando um parâmetro, no caso o id do usuário.

  // leitura da tabela users, resgata um usuário
  console.log(`Estamos buscando pelo usuário: ${id}`)
  
  res.sendFile(`${basePath}/users.html`) 
})

module.exports = router