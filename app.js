const express = require('express');

const app = express();

// moddleware
// app.use('/post', () => {
//     console.log('this is middleware')
// });

// ROUTE
app.get('/', (req, res) => {
    res.send('hello world')
});

app.get('/post', (req, res) => {
    res.send('this is post')
});

app.listen(3000);