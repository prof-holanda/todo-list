const express = require('express');
const app = express();

app.get('/api/v1/list', (request, response)=> {
    response.send('Hello World1');
});

app.listen(3000, ()=> console.log('Aplicação iniciada na porta 3000'));
