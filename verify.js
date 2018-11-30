db = require("./database.js");
module.exports = app;

app.post('./verify', function (req, res) {
    console.log("Hello world");
    req.assert("user","user required").notEmpty();
    req.assert("pass","pass required").notEmpty();

    console.log("test");
    
    var errors = req.validationErrors();
    
    if (!errors) {
        var id = {
            user: req.santitize("user").escape().trim(),
            pass: req.santitize("pass").escape().trim()
        };
        db.func('checkuser', [id.user, id.pass])
            .then( data => {
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
});
