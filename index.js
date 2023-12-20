import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import "dotenv/config";
import bcrypt from 'bcrypt';
//import passport from "passport";
//import session from 'express-session';
//import LocalStrategy from 'passport-local';

//const session = express-session();
//const LocalStrategy = passport-localStorage();
const app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


 // app.use(passport.initialize());
 // app.use(passport.session());

const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

db.connect();

const salt_rounds=10;

async function giveID()
{
const dataID = await db.query("SELECT * FROM users")
let id = dataID.rows.length;
return id;
}

app.get('/', async (req,res)=>{
res.render('home.ejs');
});

app.get('/login', async (req,res)=>{
    res.render('login.ejs');
});

app.get('/register', async (req,res)=>{
    res.render('register.ejs');
});

app.get('/logout', async (req,res)=>{
  res.render('login.ejs');
});
app.get('/submit', async (req,res)=>{
  res.render('submit.ejs');
});




app.post('/register', async (req,res)=>{
  try{
  const name = req.body.name;
  const username = req.body.username;
  const pass = req.body.password;
  const confirm_pass = req.body.password2;
  if(pass!=confirm_pass){
    console.log("Password and Confirm Password Not Matching!!!")
    res.render('register.ejs',{
      message: 'Password and Confirm Password Not Matching!!!',
    });
  }

  const check = await db.query("SELECT * FROM users WHERE email=$1",[username]);
  if(check.rows.length>0)
  {
    console.log("Email ID already Registered")
    res.render('register.ejs',{
      message: 'Email Already Registered!!!',
    });
  }

  
  var id = await giveID();
  bcrypt.hash(pass,salt_rounds,async function(err,hash){
    await db.query("INSERT INTO users(id,email,password,name) VALUES($1,$2,$3,$4);",[(++id),username,hash,name]);
    res.render('login.ejs');
  });
}
  
  catch(err)
  {
    console.log(err);
  }
});

app.post('/login', async (req,res)=>
{
  try{
  const ename = req.body.username;
  const pass = req.body.password;
  const passcheck = await db.query("SELECT * FROM users WHERE email=$1",[ename]);
  const userSecretDatarows = await db.query("select * from secrets where secret_id=$1",[passcheck.rows[0].id]);
  const userSecretData = userSecretDatarows.rows;
  const hash = passcheck.rows[0].password;
  bcrypt.compare(pass,hash, function(err,result){

    if(result===true)
    {
        res.render('secrets.ejs',{
          id: passcheck.rows[0].id,
          name: passcheck.rows[0].name,
          secretArray: userSecretData
        });
    }
    else
    {
        console.log('User Details are Incorrect');
        res.render('login.ejs',{
          message: 'Incorrect Details!!!',
        });
    }
  });    
  }

 catch(err)
  {
    console.log("Details Incorrect");
    res.render('login.ejs',{
      message: 'Incorrect Details!!!',
    });
  }
});
app.post('/submit',async(req,res)=>{
  try{
  const secretData = req.body.secret;
  const getId = req.body.UserID;
  const passcheck = await db.query("SELECT name FROM users WHERE id=$1",[getId]);
  await db.query("INSERT INTO secrets(secret,secret_id) VALUES($1,$2);",[secretData,getId]);
  const userSecretDatarows = await db.query("select * from secrets where secret_id=$1",[getId]);
  const userSecretData = userSecretDatarows.rows;
    res.render('secrets.ejs',{
      id: getId,
      name: passcheck.rows[0].name,
      secretArray: userSecretData
    });
   }
   catch(err)
   {
    console.log("Error occured!")
    res.status(404);
   }
  
});

app.listen(port,()=>
{
    console.log(`Server running on port ${port}`);
});

