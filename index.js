const express = require('express');
const app = express() /* MANDA A LLAMAR AL CONSTRUCTOR DE LA CLASE*/

app.get('/', (request, response) => {
    response.send('Hello World from GET')
}) 


app.post('/', (request, res) => {
    res.send('Hello World from POST')
}) 


app.put('/', (request, response) => {
    response.send('Hello World from PUT')
}) 


app.patch('/', (request, response) => {
    response.send('Hello World from PATCH')
}) 


app.delete('/', (request, response) => {
    response.send('Hello World from DELETE')
}) 
/*

FUNCIONALIDAD

http://localhost:3000
*/

app.listen(3000, () =>{
    console.log('listening on port 3000')
})
