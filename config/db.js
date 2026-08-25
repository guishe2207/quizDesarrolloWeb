const mongoose = require('mongoose');

function conectarDB() {
  return mongoose.connect( 'mongodb+srv://gshsilva2207_db_user:Guishe2207@cluster0.cuhrrz2.mongodb.net/quiz');
}

module.exports = conectarDB;
