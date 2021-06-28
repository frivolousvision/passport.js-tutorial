const router = require("express").Router();
const passport = require("passport");

//Auth Login
router.get("/login", (req, res) => {
  res.render("login", { user: req.user });
});
//Auth logout
router.get("/logout", (req, res) => {
  //handle with passport
  req.logOut(); //this is a passport function
  res.redirect("/");
});

//Auth with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

//callback routes for google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  // res.send(req.user);
  res.redirect("/profile/");
});

module.exports = router;
