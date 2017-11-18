const express = require('express');
const router = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

var cors = require('cors')
router.use(cors())

var bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies

// Connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://mydb:root@ds113606.mlab.com:13606/mydb', (err, db) => {
      if (err) return console.log(err);

  closure(db);
});
};

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

// Get users
router.get('/users', (req, res) => {
  connection((db) => {
  db.collection('employees')
    .find()
    .toArray()
    .then((users) => {
    response.data = users;
  res.json(response);
})
.catch((err) => {
    sendError(err, res);
});
});
});

router.post('/addusers',function(req, res){
  var firstname = req.body.firstName;
  var lastname= req.body.lastName;
  var username= req.body.username;

  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://mydb:root@ds113606.mlab.com:13606/mydb";
  /*MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.createCollection("employees", function(err, res) {
      if (err) throw err;
      console.log("Collection is created!");
      db.close();
    });
  });*/

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myobj = { firstname: firstname , lastname: lastname, username: username };
    db.collection("employees").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 record inserted");
      db.close();
    });
  });
  res.send(JSON.stringify({ a: 1 }));
});



module.exports = router;
