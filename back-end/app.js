var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database');
const dbUser = process.env.DB_USER2;
const dbPass = process.env.DB_PASS2;
const dbName = process.env.DB_NAME2;
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.f1mwk.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const prateleira = require('./routes/prateleira');
app.use('/prateleira', prateleira);

const estudante = require('./routes/estudante');
app.use('/estudante', estudante);

const bibliotecaria = require('./routes/bibliotecaria');
app.use('/bibliotecaria', bibliotecaria);

const autor = require('./routes/autor');
app.use('/autor', autor);

const obra = require('./routes/obra');
app.use('/obra', obra);

const emprestimo = require('./routes/emprestimo');
app.use('/emprestimo', emprestimo);

module.exports = app;