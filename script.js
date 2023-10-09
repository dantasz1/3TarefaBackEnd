const express = require('express')
const app = express();

app.use(express.json());

app.listen(3000, () => {
console.log("Servidor Iniciado")
})
const veiculos = []
app.get('/veiculo' , (req , res ) => {
    console.log("todos os carros (geral/get)")
    res.status(200).send(veiculos)
})
app.get('/veiculo/:id' , (req , res ) => {
const acharVeiculoId = veiculos.find(x == x.id === req.params.id)
veiculos[acharVeiculoId]
res.status(200).send(acharVeiculoId)
})
app.post('/veiculo' , (req , res) => {
    veiculos.push(req.body)
    res.status(200).send('cadastro feito com sucesso')
})
app.put('/veiculo/:id' , (req , res) => {
    
    
})