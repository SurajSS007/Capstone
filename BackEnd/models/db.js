const mongoose = require('mongoose');

//this is for connnecting MongoDB
mongoose.connect('mongodb://localhost:27017/Capstone', { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./user');         // requiring Schema                                      
require('./course');       // requiring Schema                                               
require('./university');   // requiring Schema                                                  
require('./schedule')      // requiring Schema              
require('./cart')          // requiring Schema                                                          
require('./educator')          // requiring Schema                                                          