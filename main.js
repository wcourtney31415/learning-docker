var MongoClient = require('mongodb').MongoClient

var ipAddress = 'localhost'
var port = '27017'
var url = `mongodb://${ipAddress}:${port}/`
var dbName = 'exampleDB'
var collection = 'users'

MongoClient.connect(url, function(err, db) {
  if (err) throw err
  var dbo = db.db(dbName)
  dbo.collection(collection).findOne({}, function(err, result) {
    if (err) throw err
    var msg = ` Hello, ${ result.firstName } ${ result.lastName }!`
    console.log(msg)
    db.close()
  })
})