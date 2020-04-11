const express = require('express');

var app = express();

let getUserInfo = function (req, res) {
    res.status(200).send({
        username: 'gosched',
    });
}

app.get('/', getUserInfo);

app.listen(3000, () => {
    console.log("Server started at port 3000");
});

module.exports.app = app;