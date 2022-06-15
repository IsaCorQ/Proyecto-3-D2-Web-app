const express = require("express");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
const app = express();

const UserModel = require("./models/User");
const mongoURI = "mongodb://localhost:27017/sessions";

mongoose.connect(mongoURI)
.then(res => {
    console.log("MongoDB connected");
});

const store = new MongoDBSession({
    uri: mongoURI,
    collection: "mySessions",
})

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: "key that signs cookie",
    resave: false,
    saveUninitialized: false,
    store: store,
}));

const isAuth = (req, res, next) =>{
    if(req.session.isAuth){
        next()
    } else {
        res.redirect("/login")
    }
}

app.get("/", (req, res)=>{
    res.render("start");
});

app.get("/login", (req, res)=>{
    res.render("login")
});

app.post("/login", async (req,res)=>{
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});
    if(!user){
        return res.redirect("/login")
    }
    const correctPassword = await bcrypt.compare(password, user.password);
    if(!cryptPassword){
        return res.redirect("/login");
    }
    req.session.isAuth = true;
    res.redirect("/dashboards");
})

app.get("/register", (req, res)=>{
    res.render("register")
});

app.post("/register", async (req, res)=>{
    const {username, password} = req.body;
    let user = await UserModel.findOne({username});
    if (user){
        return res.render("/register");
    }
    const cryptPassword = await bcrypt.hash(password, 12);
    user = new UserModel({
        username,
        password: cryptPassword
    });
    await user.save();
    res.redirect("/login");
});

app.get("/dashboard", isAuth, (req, res)=>{
    res.render("dashboard")
});

app.post("/logout", (req, res)=>{
    req.session.destroy((err)=>{
        if(err) throw err;
        res.redirect("/login");
    });
});

app.listen(5000, console.log("Server running on http://localhost:5000"));