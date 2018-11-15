const express = require('express')
const app = express()

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}var path = __dirname + '/public/'

app.use(express.static(path));

app.get('/', (req, res) => res.sendFile(path + 'home.html'))

app.listen(port, () => console.log(`Listening on port ${port}!`))
