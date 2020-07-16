const MongoClient = require('mongodb').MongoClient

const ipAddress = 'localhost'
const port = '27017'
const url = `mongodb://${ipAddress}:${port}/`
const dbName = 'exampleDB'
const collectionName = 'users'

MongoClient.connect(url, doStuff)

function doStuff(err, db) {
  if (err) throw err
  const dbo = db.db(dbName)
  const collection = dbo.collection(collectionName)
  collection.findOne({}, sayHello)
  db.close()
}

function sayHello(err, result) {
  if (err) throw err
  console.log(` Hello, ${ result.firstName } ${ result.lastName }!`)
}