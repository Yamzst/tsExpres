const express = require('express')
const app = express()

let users = [
    {
        id: 1,
        user: 'Juan',
    },{
        id: 2,
        user: 'Agustina',
    },
]

app.get('/', (request, response) => {
    response.send('<h1>Servidor con Express</h1>')
})


app.get('/api/users', (request, response) => {
    response.json(users)
})

app.get('/allow-cors', function(request, response) {
    response.set('Access-Control-Allow-Origin', '*');
    response.sendFile(__dirname + '/estado-Boza_Ella.mp4');
  });
  

app.get('/img', (request, response) => {
    response.sendFile(__dirname + '/estado-Boza_Ella.mp4');
   // response.sendFile('/pusd.js')
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('estamo ne puerto')
})