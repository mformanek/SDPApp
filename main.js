const express = require('express')
const db = require("./database.js")
const app = express()

var router = express.Router();

// Routes for everything
router.get("/verify", function(req,res) {
    res.send("./verify.js");
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}var path = __dirname + '/public/'

app.use(express.static(path));

app.get('/home.html', (req, res) => res.sendFile(path + 'home.html'))

app.listen(port, () => console.log(`Listening on port ${port}!`))
