const Express = require("express");
const Router = Express.Router();

module.exports = Router;

Router.get('/', function(req, res, next){
    res.render('index', {
        title: "Admin - Shop Online",
        name: 'Administrator'
    });
});