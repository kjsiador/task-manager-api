// CRUD create read update delete
// C:\Users\kristian.j.s.siador\mongodb\bin\mongod.exe --dbpath=/Users/kristian.j.s.siador/mongodb-data 

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const url = 'mongodb://127.0.0.1:27017'
const dbname = 'task-manager'

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database.')
    }

    const db = client.db(dbname)

    // --------------- delete sample ---------------
    // db.collection('users').deleteMany({
    //     age: 20
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Learn Node.js'
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })

    // --------------- update sample ---------------
    // db.collection('users').updateOne({
    //     _id: new ObjectID("5ebd0eb964ea505074ca5715")
    // }, {
    //     $set: {
    //         name: 'Inosuke'
    //     }    
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // --------------- read sample ------------------
    // db.collection('users').findOne({_id: new ObjectID("5ebdebac3916620fdcb2b89f")}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch user')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age: 19}).toArray((error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch user')
    //     }
    //     console.log(user)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("5ebd1853a3b5cf31bcb22018")}, (error, task) => {
    //     if(error){
    //         return console.log('Unable to fetch task')
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     if(error){
    //         return console.log('Unable to fetch tasks')
    //     }
    //     console.log(tasks)
    // })

    // -------------- insert sample ------------------
    // db.collection('users').insertOne({
    //     name: 'Tanjiro',
    //     age: 16
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Mike',
    //         age: 23
    //     }, {
    //         name: 'Kobe',
    //         age: 24
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert users')
    //     }

    //     console.log(result.ops)
    // })  

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Learn Node.js',
    //         completed: false
    //     }, {
    //         description: 'Learn MongoDB',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert tasks')
    //     }

    //     console.log(result.ops)
    // })


})
