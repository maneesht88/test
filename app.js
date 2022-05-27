const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const https= require("https");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
const mongoose = require('mongoose');
// mechatronics2020

// mongodb+srv://maneesht88:maneesh@123@cluster0-wxzpv.mongodb.net/marianregidb

mongoose.connect("mongodb+srv://mechatronics2020:maneesh@123@mechatronicsclub.5l1zo.mongodb.net/membershipdb", {useNewUrlParser: true, useUnifiedTopology: true});
const registerSchema = {
  fname: String,
  phone: String,
  mail:String,
  branch:String,
  semester:String,
  admissionNumber:String,
  rollnumber:String,
  address:String,
  programmingKnowledge:String,
  expectationClub:String,
  aprovalyear:String,
status:String,

   }
const Register = mongoose.model("Register", registerSchema);





app.get("/",function(req,res){
res.render("frontpage.ejs");
});

app.get("/about",function(req,res){
    res.render("about.ejs");
    });
    app.get("/GALLERY",function(req,res){
        res.render("GALLERY.ejs");
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
                        app.get("/activities2020%2021",function(req,res){
                          res.render("activities/2020-2021.ejs");
                          });
                          app.get("/activities2021%2022",function(req,res){
                            res.render("activities/2021-2022.ejs");
                            });
                          app.get("/participationpage",function(req,res){
                            res.render("activities/participationpage.ejs");
                            });
 app.get("/corec2020%2021",function(req,res){
  res.render("corecomitees/2020-2021.ejs");
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
   app.get("/membership",function(req,res){
    res.render("membership.ejs");
   });
   app.get("/techsnippet",function(req,res){
    res.render("techsnippet.ejs");
   });

   app.get("/membershipsss",function(req,res){
    res.render("membershipsss.ejs");
   });
   app.get("/login",function(req,res){
    res.render("login.ejs");
   });

   app.post("/login",function(req,res){
user=req.body.user;
pass=req.body.pass;
if(user==="manmarian" && pass==="marianmech@123man"){
    res.render("logins.ejs");
  }
  else{
  res.redirect("/");
  }
   });
//membership submission responds
   app.post("/membershipsss",function(req,res){
    var txt="notapproved";
fname=req.body.fname;
   const newRegister = new Register({
fname: req.body.fname,
phone: req.body.phone,
mail:req.body.mail,
branch:req.body.branch,
semester:req.body.semester,
admissionNumber:req.body.admissionNumber,
rollnumber:req.body.rollnumber,
address:req.body.address,
programmingKnowledge:req.body.programmingKnowledge,
expectationClub:req.body.expectationClub,
status:txt,
});
newRegister.save(function(err) {
  if (!err) {
    Register.findOne({fname:fname},function(err,foundList){
    if(!err){
  //    console.log(fname)
res.render("membershipsssthankyou.ejs",{fname:foundList.fname});
}
else{res.send("error");}
});
}
else{ res.send("error");}
});

});
//get members list in portal registration
app.get("/MembersofMechatronicsClub",function(req,res){
  Register.find({status:"approved"},function(err,foundList){
    if(!err){
fname1=[];
branch1=[];
aprovalyear1=[];
for(i=0;i<foundList.length;i++){
  fname1.push(foundList[i].fname);
  branch1.push(foundList[i].branch);
  aprovalyear1.push(foundList[i].aprovalyear);
  }
res.render("MembersofMechatronicsClub.ejs",{
  fname1:fname1,
  branch1:branch1,
  aprovalyear1:aprovalyear1,
  });
}
else{
  res.send("error");
}
});
});

//page for seeing data of members
app.get("/clubregistrymechatronicssee123abcd", function(req, res) {
  Register.find({},function(err,foundList){
    if(!err){
//console.log(foundList)
fname1=[];
phone1=[];
mail1=[];
branch1=[];
semester1=[];
admissionNumber1=[];
rollnumber1=[];
address1=[];
programmingKnowledge1=[];
expectationClub1=[];
status1=[];

for(i=0;i<foundList.length;i++){
  fname1.push(foundList[i].fname);
  phone1.push(foundList[i].phone);
  mail1.push(foundList[i].mail);
  branch1.push(foundList[i].branch);
  semester1.push(foundList[i].semester);
  admissionNumber1.push(foundList[i].admissionNumber);
  rollnumber1.push(foundList[i].rollnumber);
    address1.push(foundList[i].address);
  programmingKnowledge1.push(foundList[i].programmingKnowledge);
  expectationClub1.push(foundList[i].expectationClub);
  status1.push(foundList[i].status);
}
//  console.log(fname1);
res.render("signinful.ejs",{
  fname1:fname1,
  phone1:phone1,
  mail1:mail1,
  branch1:branch1,
  semester1:semester1,
  admissionNumber1:admissionNumber1,
  rollnumber1:rollnumber1,
  address1:address1,
  programmingKnowledge1:programmingKnowledge1,
  expectationClub1:expectationClub1,
  status1:status1,
});
}
else{
  res.send("error");
}
});
});
// list of students approved
app.get("/editabc123gfdswwwwwww123qwerdw", function(req, res) {
  Register.find({status:"approved"},function(err,foundList){
    if(!err){
//console.log(foundList)
fname1=[];
phone1=[];
mail1=[];
branch1=[];
semester1=[];
admissionNumber1=[];
rollnumber1=[];
address1=[];
programmingKnowledge1=[];
expectationClub1=[];
aprovalyear1=[];

for(i=0;i<foundList.length;i++){
  fname1.push(foundList[i].fname);
  phone1.push(foundList[i].phone);
  mail1.push(foundList[i].mail);
  branch1.push(foundList[i].branch);
  semester1.push(foundList[i].semester);
  admissionNumber1.push(foundList[i].admissionNumber);
  rollnumber1.push(foundList[i].rollnumber);
    address1.push(foundList[i].address);
  programmingKnowledge1.push(foundList[i].programmingKnowledge);
  expectationClub1.push(foundList[i].expectationClub);
  aprovalyear1.push(foundList[i].aprovalyear);
}
//  console.log(fname1);
res.render("signin.ejs",{
  fname1:fname1,
  phone1:phone1,
  mail1:mail1,
  branch1:branch1,
  semester1:semester1,
  admissionNumber1:admissionNumber1,
  rollnumber1:rollnumber1,
  address1:address1,
  programmingKnowledge1:programmingKnowledge1,
  expectationClub1:expectationClub1,
  aprovalyear1:aprovalyear1,
});
}
else{
  res.send("error");
}
});
});


app.get("/updatabewsfkg3444gmgkfvdsdfsdvs", function(req, res) {
  Register.find({status:"notapproved"},function(err,foundList){
    if(!err){
//console.log(foundList)
fname1=[];
phone1=[];
mail1=[];
branch1=[];
semester1=[];
admissionNumber1=[];
rollnumber1=[];
address1=[];
programmingKnowledge1=[];
expectationClub1=[];
id1=[];
for(i=0;i<foundList.length;i++){
  fname1.push(foundList[i].fname);
  phone1.push(foundList[i].phone);
  mail1.push(foundList[i].mail);
  branch1.push(foundList[i].branch);
  semester1.push(foundList[i].semester);
  admissionNumber1.push(foundList[i].admissionNumber);
  rollnumber1.push(foundList[i].rollnumber);
    address1.push(foundList[i].address);
  programmingKnowledge1.push(foundList[i].programmingKnowledge);
  expectationClub1.push(foundList[i].expectationClub);
  id1.push(foundList[i]._id);
}
//  console.log(fname1);
res.render("aprovel.ejs",{
  fname1:fname1,
  phone1:phone1,
  mail1:mail1,
  branch1:branch1,
  semester1:semester1,
  admissionNumber1:admissionNumber1,
  rollnumber1:rollnumber1,
  address1:address1,
  programmingKnowledge1:programmingKnowledge1,
  expectationClub1:expectationClub1,
  id1:id1,
});
}
else{
  res.send("error");
}
});
});

app.post("/delete",function(req,res){
  const deleteitem=req.body.delete;
    Register.findByIdAndRemove(deleteitem,function(err){
        if(!err){
        res.redirect("/updatabewsfkg3444gmgkfvdsdfsdvs");
          }
    else{
  res.send("error");
    }
      } );
        });

        app.post("/aprove",function(req,res){
          const aprovitem=req.body.aprove;
          const currentYear = new Date().getFullYear()
            Register.findByIdAndUpdate(aprovitem,{status:"approved",aprovalyear:currentYear},function(err){
                if(!err){
                res.redirect("/updatabewsfkg3444gmgkfvdsdfsdvs");
                  }
            else{
          res.send("error");
            }
              } );
                });
   app.listen(process.env.PORT||3000,function(){console.log("Example app listening at http://localhost:3000")});
