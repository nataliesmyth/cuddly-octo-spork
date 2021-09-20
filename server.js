const express = require('express');
const app = express();
const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost/blog';
const authorsController = require('./controllers/authors.js');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

app.use('/authors', authorsController);
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));


mongoose.connect(connectionString, {
    useNewUrlPArser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });
  
  mongoose.connection.on('error', (err) => {
    console.log('Mongoose error: ', err);
  });

app.get('/', (req, res)=>{
	res.render('index.ejs');
});

app.listen(3000, () => {
    console.log('listening...')
});