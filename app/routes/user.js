const { authJwt } = require("../middleware");
const controller = require("../controllers/post");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    //get all posts or post from id 
    app.get("/posts/:id?", [authJwt.verifyToken], controller.allPostOrPostFromId);
};