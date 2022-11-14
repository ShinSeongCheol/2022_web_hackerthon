const express = require('express');
const app = express();
const userInform = require('./routes/userInform');

app.use('/userInform', userInform);

const port = 3001;
app.listen(port, () => console.log(`Node.js Server is running on port ${port}...`));