const http = require('http')

const alumno = [
    {id: '1',nombre: 'Angel', numero: '987674324'},
    {id: '2',nombre: 'Michael', numero: '985654323'},
    {id: '3',nombre: 'Juan', numero: '987656322'},
    {id: '4', nombre: 'Luis', numero: '987664321'},
    {id: '5', nombre: 'Jose', numero: '987664320'},
]

const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(alumno))
})

const PORT = 3001
app.listen(PORT)
console.log('listening on port ' + PORT)