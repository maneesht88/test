const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const https= require("https");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
res.render("frontpage.ejs");
});

app.get("/about",function(req,res){
    res.render("about.ejs");
    });
    app.get("/contact",function(req,res){
          res.render("contactus.ejs");
        });
        app.get("/activities2016%2017",function(req,res){
            res.render("activities/2016-2017.ejs");
            });
            app.get("/activities2017%2018",function(req,res){
                res.render("activities/2017-2018.ejs");
                });
                app.get("/activities2018%2019",function(req,res){
                    res.render("activities/2018-2019.ejs");
                    });
                    app.get("/activities2019%2020",function(req,res){
                        res.render("activities/2019-2020.ejs");
                        });
 app.get("/corec2019%2020",function(req,res){
 res.render("corecomitees/2019-2020.ejs");
});
app.get("/corec2018%2019",function(req,res){
    res.render("corecomitees/2018-2019.ejs");
   });
   app.get("/corec2017%2018",function(req,res){
    res.render("corecomitees/2017-2018.ejs");
   });
   app.get("/corec2016%2017",function(req,res){
    res.render("corecomitees/2016-2017.ejs");
   });

   app.listen(process.env.PORT||3000,function(){console.log("Example app listening at http://localhost:3000")});
