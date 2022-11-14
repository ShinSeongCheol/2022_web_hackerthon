const express = require('express');
const app = express();
const userInform = require('./routes/userInform');

// app.use('/userInform', userInform);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/checkLogin', (req,res) => {
    res.send('body:');
    console.log('body:', req.body.Email, req.body.Password);
});

app.post('/register', (req,res) => {
    res.send('body:');
    console.log('body:', req.body.Email, req.body.Password);
});

app.get('/blog', (req, res) => {
    res.send(`Welcome to Sejun's blog`);
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Node.js Server is running on port ${PORT}...`));