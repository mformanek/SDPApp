const express = require('express');
const db = require('./database.js');
var exp_val = require('express-validator');
var bodyParser = require('body-parser');

//const vf = require("./verify.js")
const app = express();
app.use(bodyParser.json())
app.use(exp_val());


let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}var path = __dirname + '/public/'

app.use(express.static(path));
module.exports = app;

app.get('/', (req, res) => res.sendFile(path + 'home.html'))

app.get('/verify', function (req, res) {
    res.render(path + "login.html")
    console.log("Here I am in app.get(verify)");
})

app.post('/verify', function (req, res) {
    console.log("Hello world");
    req.assert("user","user required").notEmpty();
    req.assert("pass","pass required").notEmpty();

    console.log("test");
    
    var errors = req.validationErrors();
    console.log(errors);
    db.func('checkuser', ['userC', 'helloworld'])
        .then(data => {
            console.log("Here I am");
            var temp = data[0];
            var final = temp.checkuser;
            console.log("final -", final);
            if (final == true){
                res.redirect("home.html");
            }
            else {
                res.redirect("about.html");
            }
        })
    /*
    if (!errors) {
        var id = {
            user: req.sanitize("user").escape().trim(),
            pass: req.sanitize("pass").escape().trim()
        };
        console.log("user =", id.user);
        console.log("pass =", id.pass);
        db.func('checkuser', ['userC', 'helloworld'])
            .then( data => {
                console.log("I'm in the db function");
                var temp = data[0];
                var final = temp.checkuser;
                console.log("temp =", temp);
                console.log("final =", final);
                if (final == true){
                    res.redirect("home.html");
                }
                else {
                    res.redirect("home.html");
                }
        })
    }
    */
    console.log("ding! the function's done");

});

//app.use("/verify", vf)

app.listen(port, () => console.log(`Listening on port ${port}!`))



