const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/../client/public`));

app.listen(process.env.PORT || 3000);

module.exports = app;
