const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/forgot-password', (req, res) => {
   
});

app.post('/forgot-password', (req, res) => {
}); 

app.get('/reset-password', (req, res) => {
       
});

app.post('/reset-password', (req, res) => {

});

app.listen(3000, () => {
    console.log('Server is running on port @http://localhost:3000');
});