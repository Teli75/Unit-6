const express = require('express');
require('./data.json');

//Optionally - the path module which can be used when setting the absolute path in the express.static function.
const app = express();

app.get('/', (req, res) => {
    res.send('I love you');

});

app.listen(3001);

// app.listen(3001, () => {
//     console.log('The app is running on localhost:3001!')
// });

