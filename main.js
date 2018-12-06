const express = require('express');
const db = require('./database.js');
const flash = require("express-flash");
const sess = require("express-session");
var exp_val = require('express-validator');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var an = require("alert-node");
const bcrypt = require("bcrypt");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(cookieParser('notMonday'));
app.use(sess({
    secret: 'notMonday',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));
app.use(sess());
app.use(exp_val());
app.use(flash());

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}var path = __dirname + '/public/'

app.use(express.static(path));

app.get('/', (req, res) => res.sendFile(path + 'home.html'))

app.get('/verify', function (req, res) {
    res.sendFile(path + "login.html")
    console.log("Here I am in app.get(verify)");
})

function getSalt(user) {
    var query = "select login.username, login.salt from login" +
                " where login.username = " + user;
    db.any(query).then(function (data) {
            var salt = data[0].salt;
            console.log(datas)
        });
    return salt;
}

app.post('/verify', function (req, res) {
    console.log("Hello world");
    req.assert("user","user required").notEmpty();
    req.assert("pass","pass required").notEmpty();

    var username = req.body.user;
    var pass = req.body.pass
    console.log("test");
    
    var errors = req.validationErrors();
    console.log(errors);
    
    if (!errors) {
        var salt = getSalt(username);
        console.log("salt");
        console.log(salt);
        db.func('checkuser', [username, pass])
            .then( data => {
                var temp = data[0];
                var final = temp.checkuser;
                console.log("temp =", temp);
                console.log("final =", final);
                if (final == true){
                    res.redirect("home.html");
                }
                else {
                    res.redirect("login.html");
                }
        })
    }
    else {
        req.flash('error', 'Im trying flash');
        an("Error! Did you put in a unsername and a password?", "window");
        res.redirect("login.html");
    }
    console.log("ding! the function's done");

});

app.listen(port, () => console.log(`Listening on port ${port}!`))

module.exports = app; 
