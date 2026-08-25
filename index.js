const express = require('express');
const conectarDB = require('./config/db');
const charlasRouter = require('./routes/charlas');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

conectarDB();

app.use('/charlas', charlasRouter);

app.get('/', (req, res) => {
  res.redirect('/charlas');
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
