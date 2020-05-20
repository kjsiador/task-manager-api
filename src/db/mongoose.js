const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const me = new User({
//     name : 'Mike',
//     email: 'mike@gmail.com',
//     password: 'the_goat'
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error.message)
// })


// task.save().then((task) => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error', error.message)
// })