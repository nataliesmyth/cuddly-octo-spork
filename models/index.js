const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/express-blog';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.log(`MongoDB connection error: ${err}`));

// Make all models available
module.exports = {
    Author: require('./Author')
}