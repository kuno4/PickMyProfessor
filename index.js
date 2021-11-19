/*
    This is for the end points use this for all api calls 
    if you want to use real in time rendering (Socket.IO please attached to seperate file)
*/
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { Logger } = require('./middleware/Logger');
const {DatabaseHandler} = require('./DatabaseHandler');
const {Developer} = require('./developPass');
const userRouter = require('./Routes/users');


//enviorment and development vars 
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGOURL || Developer.Mongo_Pass();

//app and db
let app = express();

//allows cors and axios to make request 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(
    cors({
      origin: ["http://localhost:8080"],
      //to allow cookies and other credentials from this origin...should see
      //200 ok in network tab and also should see in localhost now from
      //front end and backend having credentials true
      credentials: false,
    })
  );


//middleware 
app.use(express.static(__dirname + "/public")); //public render for html js css
app.use(Logger);
app.use(express.json()); // for json request
app.use(express.urlencoded({extended:true})); // parsing 
app.use(cookieParser());

//routing
app.use('/users', userRouter);


//for the main page aka index testing 
app.get("/", (req, res, next) => {
    return res.status(200).render("index");
});


app.listen(PORT, () => {
    console.log(`Running server on port ${PORT}`);
    DatabaseHandler.startDatabase(MONGO_URL);
});