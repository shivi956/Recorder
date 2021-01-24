const express = require('express');
const app = express();
const mongo = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/views')); 


const url = 'mongodb://localhost:27017';
let db, collection ;
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
    db = client.db('Transcript');
    collection = db.collection('savedTranscript');
    console.log('connected to DB!');
  if (err) {
    console.error(err)
    return;
  }
});
app.get('/', (req, res) => {
  res.sendFile('index.html');
});
app.post('/', (req, res) => {
    collection.insertOne({transcript: req.body.transcript, time: Date()}, (err, result) => {
        if (err) {
            console.error(err)
            return;
          }

    });
  });
app.listen(5000);
 
