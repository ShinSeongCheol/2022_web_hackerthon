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

const port = 3001;
app.listen(port, () => console.log(`Node.js Server is running on port ${port}...`));