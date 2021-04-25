const http = require('http')
const express = require('express')
const app = express()

app.use(express.json());

let alumnos = [
    {id: '1',nombre: 'Angel', numero: '987674324'},
    {id: '2',nombre: 'Michael', numero: '985654323'},
    {id: '3',nombre: 'Juan', numero: '987656322'},
    {id: '4', nombre: 'Luis', numero: '987664321'},
    {id: '5', nombre: 'Jose', numero: '987664320'},
];

let date = new Date();

app.get('/', (request, response) => {
    response.json(alumnos)
})

app.get('/info', (request, response) => {
    response.send(`<h1>Phonebook has info for  ${alumnos.length}  people</h1><h1>`+ date + '</h1>')
})


app.get('/info/:id', (request, response) => {
    const id = request.params.id
    const note = alumnos.find(alumno => alumno.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.get('/api/alumnos',(request,response) => {
    request.send(alumnos);
});

app.get('/api/alumnos/:id', (request, response) => {
    const id = request.params.id
    const alumno = alumnos.find(alumno => alumno.id === id)
    
    if (!alumno) {
        response.status(404).send(`No se ha encontrado el registro con el id ${request.params.id}.`)
    } else {
        response.send(alumno); 
    }
});

app.delete('/api/alumnos/:id', (request, response) => {
    const id = request.params.id
    alumno = alumnos.filter(alumno => alumno.id !== id)
  
    response.status(204).end()
});

app.post('/api/alumnos', (request, response) => {
    const alumno = {
        id: Math.round(Math.random()*100000),
        nombre: req.body.nombre,
        numero: req.body.numero,
    };
    console.log(alumno)
    alumnos.push(alumno);
    request.send(alumno);
    response.json(alumno)
});

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

