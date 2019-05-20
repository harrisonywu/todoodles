const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 1235;

app.use(morgan('dev'));

app.use(express.static('public'));

app.listen(port, console.log(`listening on port ${port}!`));