db = require("./database.js");
module.exports = app;

app.put('/login/verify', function (req, res) {
    req.assert("user","user required").notEmpty();
    req.assert("pass","pass required").notEmpty();
    
    console.log("test")
    
    var errors = req.validationErrors();
    
    if (!errors) {
        var id = {
            user: req.santitize("user").escape().trim(),
            pass: req.santitize("pass").escape().trim()
        };
        db.none("SELECT * FROM login" +
                    "WHERE username = " + id.user +
                        "AND hashvalue = " + id.pass //TODO: do a hash here thx
        ).then(function (res) {
                   //res.flash("success","login")
                   res.render("about.html")
               }
        )
        
        res.sendFile("about.html")
    }
});
