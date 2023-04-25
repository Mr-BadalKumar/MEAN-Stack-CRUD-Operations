const mongoose = require('mongoose');

mongoose.connect('mongodb://root:root@mongo-test-mongodb:27017/CrudDB', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
