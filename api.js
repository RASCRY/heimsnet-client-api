const config = require('./config.json');
const express = require('express');
const app = express();

app.disable('x-powered-by');

app.get('/', (req, res) => {
res.status(200).send({
 status: "Online!"
})
});

app.listen(config.api.listen, () => {
    console.log(`${config.api.logs.prefix} listening on port ${config.api.listen}`);
});
