var express = require('express');

var server = express();

server.use(express.json());

// Query params = ?firstName=joao
// Route params = /users/1
// Request body = { "name": "João", "email":"joao@emaildele.com.br"}

const users = ['joaozinho', 'luizinho', 'maria', 'mariana', 'bruna'];

// midlleware
server.use((req, res, next) => {
  console.log(`Método: ${req.method}; URL: ${req.url}`);
  return next();
});

// listall
server.get('/users', (req, res) => {
  return res.json(users);
});

// search user by id
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

// save user
server.post('/users', (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

// edit user
server.put('/user/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
});

// delete user
server.delete('/user/:index', (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.send();
});

server.listen(3000);
