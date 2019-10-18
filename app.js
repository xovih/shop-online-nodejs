const MyPort = 2810;
const Express = require("express");
const Ejs = require("ejs");
const Path = require("path");
const Mongoose = require("mongoose");
const DbConfig = require('./config/database');

const App = new Express();

// Setup DB
Mongoose.connect(DbConfig.dbserver, DbConfig.mongoset, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log(`Connected to database server`);
    }
});

// Middle Ware
App.set('views', Path.join(__dirname, 'views'));
App.set('view engine', 'ejs');
App.use(Express.static(Path.join(__dirname, 'public')));

// Routes
// Index Page
const Pages = require("./routes/pages");
App.use('/', Pages);

// Index Page
const AdminPages = require("./routes/admin_pages");
App.use('/admin/pages', AdminPages);

// Server Setup
App.listen(MyPort, function(err){
    if (err) console.log(err);
    console.log(`Server running at port : ${MyPort}`);
});