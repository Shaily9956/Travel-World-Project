const express = require("express");
const app = express();
const mongoose = require("mongoose");

const path = require("path");
const Destination = require("./model/DestinationModel.js");
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./model/UserModel.js');
const BookedUser = require('./model/BookingModel.js');
const newUserQuery = require('./model/QueryModel.js');
const UserReview=require('./model/ReviewModel.js')
const session = require('express-session');
const port = 3000;
app.use(express.json());


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use('/Images', express.static(path.join(__dirname, 'Images')));
app.use('/JavaScript', express.static(path.join(__dirname, 'JavaScript')));

app.use(express.urlencoded({ extended: true }));




app.use(session({
  secret: 'travelWorld',
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  }
}));



app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req, res, next) => {
  res.locals.currUser = req.user;
  next();
});


// Sign Up Authentication

app.post("/travelWorld/signUp", async (req, res) => {
  try {
    let { username, email, phoneNumber, password, confirmpassword } = req.body;
    if (password !== confirmpassword) {
      res.json({ message: "Passwords do not match" });
    }
    let newUser = new User({ email, username, phoneNumber });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        next(err);
      }
      res.locals.currUser = req.user;
      res.redirect("/travelWorld/home");
    });
  } catch (error) {
    console.log(error);
    res.send("Error Occurred");
  }
});

//Sign In Authentication

app.post('/travelWorld/signIn',
  passport.authenticate("local", { failureRedirect: "/signIn" }),
  async (req, res) => {
    res.locals.currUser = req.user;
    res.redirect("/travelWorld/home");
  }
);

//Sign Out Authentication

app.get("/travelWorld/signOut", async (req, res) => {
  req.logOut((err) => {
    if (err) {
      console.log(err);
    }
    res.locals.currUser = undefined;
    res.redirect("/travelWorld/home");
  })
});

main().then((res) => {
  console.log("connection successfully");
}).catch((err) => console.log(err));



async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/travelWorld');
}

// Search Destinations 
app.get('/travelWorld/search', async (req, res) => {
  const location = req.query.location;
  const destinations = await Destination.find({ location: location });
  if (!destinations || destinations.length === 0) {
    res.render("showdestination.ejs", { destinations: [] });
  }
  res.render("showdestination.ejs", { destinations });
});

// All Packages Displayed
app.get('/travelWorld/packages', async (req, res) => {
  const packages = await Destination.find();
  res.render("layouts/packages.ejs",{packages});

});

// Package Displayed in Website

app.get('/travelWorld/packages/:id',async (req,res)=>{
  let {id}=req.params;
  const packagedetail=await Destination.findById(id);
  //console.log(destinationpackage);
  res.render("packageDetail.ejs",{ destinationpackage: [packagedetail] });
});

//All Bookings are Displayed

app.post("/travelWorld/bookedUser", async (req, res) => {
  try {
    let { Location, Arrival, Leaving, Persons,
      Price } = req.body;
    let newbookedUser = new BookedUser({ Location, Arrival, Leaving, Persons, Price });
    await newbookedUser.save();
    const allBookings = await BookedUser.find();
    res.render("booking.ejs", { newBooking: allBookings });
  } catch (error) {
    console.log(error);
    res.send("Error Occurred");
  }
});
// All User Queries 

app.post("/travelWorld/userQuery", async (req, res) => {
  try {
    let { username, email, subject, message } = req.body;
    let newQuery = new newUserQuery({ username, email, subject, message });
    await newQuery.save();
    const allQueries = await newUserQuery.find();
    res.render("query.ejs", { newQueries: allQueries });
  } catch (error) {
    console.log(error);
    res.send("Error Occurred");
  }

});
app.post("/travelWorld/review", async (req, res) => {
  try {
    let { username,review } = req.body;
    let newReview = UserReview({ username,review });
    await newReview.save();
    res.redirect("/travelWorld/review");
  } catch (error) {
    console.log(error);
    res.send("Error Occurred");
  }

});
app.get("/travelWorld/giveReview",(req,res)=>{
res.render("giveReview.ejs");
});
// Starter Page Route
app.get("/travelWorld", (req, res) => {
  res.render("layouts/getStartPage.ejs")
});
//Home page Route
app.get("/travelWorld/home", (req, res) => {
  res.render("layouts/home.ejs");
});
//About page Route
app.get("/travelWorld/about", (req, res) => {
  res.render("layouts/about.ejs");
});
// Review Page Route
app.get("/travelWorld/review", async (req, res) => {
  let reviews=await UserReview.find();

  res.render("layouts/review.ejs",{reviews});
});

// package page Route
app.get("/travelWorld/packages", (req, res) => {
  res.render("layouts/packages.ejs");
});
//Book page Route
app.get("/travelWorld/book", (req, res) => {
  res.render("layouts/book.ejs");
});
//Contact Page Route
app.get("/travelWorld/contact", (req, res) => {
  res.render("layouts/contact.ejs");
});




app.listen(port, () => {
  console.log("server is listening to port 3000");
});