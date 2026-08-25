const mongoose = require('mongoose');

function conectarDB() {
  return mongoose.connect( 'mongodb://gshsilva2207_db_user:Guishe2207@ac-tepdcgt-shard-00-00.cuhrrz2.mongodb.net:27017,ac-tepdcgt-shard-00-01.cuhrrz2.mongodb.net:27017,ac-tepdcgt-shard-00-02.cuhrrz2.mongodb.net:27017/quiz?ssl=true&replicaSet=atlas-wz0xmz-shard-0&authSource=admin&appName=Cluster0');
}

module.exports = conectarDB;
