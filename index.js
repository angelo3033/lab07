const http = require('http')
const express = require('express')
const app = express()

let alumno = [
    {id: '1',nombre: 'Angel', numero: '987674324'},
    {id: '2',nombre: 'Michael', numero: '985654323'},
    {id: '3',nombre: 'Juan', numero: '987656322'},
    {id: '4', nombre: 'Luis', numero: '987664321'},
    {id: '5', nombre: 'Jose', numero: '987664320'},
];

let date = new Date();

app.get('/', (request, response) => {
    response.json(alumno)
})

app.get('/info', (request, response) => {
    response.send(`<h1>Phonebook has info for  ${alumno.length}  people</h1><h1>`+ date + '</h1>')
})


app.get('/info/:id', (request, response) => {
    const id = request.params.id
    const note = alumno.find(alumno => alumno.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

