const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    //register user 
    app.post(
        "/signup",
        [
            verifySignUp.checkDuplicateUsernameOrEmail
        ],
        controller.signup
    );

    //signin user
    app.post("/signin", controller.signin);
};