const express = require('express');
const bodyParser = require('body-parser');
const loginRouter = require('./login');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', loginRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
