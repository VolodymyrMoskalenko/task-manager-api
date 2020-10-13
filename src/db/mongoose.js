const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, { //task-manager-api - it's name for mongodb database
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

