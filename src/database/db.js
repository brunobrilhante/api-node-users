const mongoose = require('mongoose')

async function connectDatabase(){
    await mongoose.connect('mongodb+srv://bruno:RxGROZGUKPTVDEnz@cluster0.hvlgylp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
}

module.exports = connectDatabase