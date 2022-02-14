const express=require("express");
const bodyparser=require("body-parser");
const request=require("request");
const https=require("https");
const ejs=require("ejs");
const mongoose=require("mongoose");
//const popupS=require("popups");

const _ = require("lodash");

const app=express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

 app.set("view engine","ejs");

mongoose.connect("mongodb+srv://admin-shubhi:2001shubhi@cluster0.mbvcn.mongodb.net/companyDB",{useNewUrlParser:true});
const dataschema=new mongoose.Schema({
  fname:String,
  lname:String,
  email:String,
  pass:String
});

const Login=mongoose.model("Login",dataschema);

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  if(req.body.login==="login")
  res.render("login");
else{
const email=req.body.email;
  const login=new Login({
    fname:req.body.fname,
    lname:req.body.lname,
    email:req.body.email,
    pass:req.body.pwd

  });




Login.findOne({email:email},function(err,foundemail){
  if(!err)
  {
    if(!foundemail)
    {
      login.save();
      res.render("details",{Email:email});
    }
    else{
      res.render("failure",{h1:"Email already exists please login!",val:"Login"});

    }
  }
});
}
});



const detailschema=new mongoose.Schema({
  email:String,
  country:String,
  company:String,
  role:String,
  desciption:String,
  experience:String,
  salary:String,
  cv:String
});
const Detail=mongoose.model("Detail",detailschema);
app.post("/details",function(req,res){
  const email=req.body.email;
  const country=req.body.country;
  const company=req.body.company;
  const role=req.body.role;

  const experience=req.body.experience;
  const salary=req.body.salary;
  const cv=req.body.filename;

  const item=new Detail({
    email:req.body.email,
    country:req.body.country,
    company:req.body.company,
    role:req.body.role,
    desciption:req.body.description,
    experience:req.body.experience,
    salary:req.body.salary,
    cv:req.body.filename
  });
  Detail.findOne({email:email},function(err,found){
    if(!err)
    {
      if(!found){
        item.save();
        res.render("success");
      }
      else{
        Detail.updateOne({email:email},{country:country,company:company,role:role,experience:experience,salary:salary,cv:cv},function(err){
          if(!err)
          res.render("success");
        });
      }
    }
  });



  //res.redirect("/details");
  //res.render("success");
});

app.post("/login",function(req,res){
  // res.render("login");
  Login.findOne({email:req.body.email},function(err,found){
    if(!err)
    {
      if(found)
      {
        if(found.pass===req.body.pwd)
        {
          //res.render("details",{Email:req.body.email});
          Detail.findOne({email:req.body.email},function(err,details){
            if(!err)
            {
              if(!details)
              {
                res.render("details",{Email:req.body.email});
              }
              else{
                res.render("edit",{
                  Email:details.email,
                  Country:details.country,
                  Company:details.company,
                  Role:details.role,
                  Experience:details.experience,
                  Salary:details.salary,

                });

              }
            }
          });


        }
        
        else{
          res.render("failure",{h1:"Password does not matches!",val:"Login"});

        }
      }
      else
      res.render("failure",{h1:"Email doesn't exist. Please signup!",val:"Signup"});

    }
  });
});
app.post("/failure",function(req,res){
  if(req.body.button==="Login")
  res.render("login");
  else
  res.redirect("/");
})

app.listen(process.env.PORT|| 3000,function(){
  console.log("Server is on port 3000");
})
