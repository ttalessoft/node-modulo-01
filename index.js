var express = require('express');

var server = express();

// Query params = ?firstName=joao
// Route params = /users/1
// Request body = { "name": "João", "email":"joao@emaildele.com.br"}

const users = ['joaozinho', 'luizinho', 'maria', 'mariana', 'bruna'];

server.get('/users/:index', function(req, res) {
  const { index } = req.params;
  if (users[index]) {
    return res.json(users[index]);
  } else {
    return res.json({
      message: 'Pessoa não encontrada!'
    });
  }
});

server.listen(3000);
