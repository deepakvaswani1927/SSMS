const express = require('express');
const app = express();
const routes = require('./myroutes');
require('dotenv').config();
const port = process.env.PORT ;

app.use(express.json());
app.use('/' , routes)
app.listen(port, () => {
console.log(`listening on port ${port}....`);
});
