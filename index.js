const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send("Hello Express And Azure DevOps");
})

app.listen(PORT, function(req, res) {
    console.log(`Server Up And Running On Port ${PORT}`);
})
