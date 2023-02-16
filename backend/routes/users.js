var express = require('express');
var router = express.Router();
var verify = require('../middleware/verifyToken')
const userHelpers = require('../helpers/user-helpers')
const { USER_COLLECTION } = require('../config/collections');
const jwt = require("jsonwebtoken");
const { db } = require('mongodb');

var objectId = require('mongodb').ObjectId


const maxAge = 3 * 24 * 60 * 60;


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
  res.render('/')

});


router.get('/signup', function (req, res, next) {
  res.render('users/signup');
});

router.post('/signup', async (req, res) => {
  const { name, phone, email, password } = req.body;
  console.log(req.body);
  try {
    userHelpers.doSignup(req.body)
      .then((response) => {
        if (response._id) {
          userid = response._id
          const accessToken = jwt.sign(
            {
              id: userid,
              email: response.email
            },
            "christy",
            { expiresIn: "7d" });
          res.cookie("accessToken", accessToken,
            { httpOnly: true }).status(200).json({ userid, accessToken })
        }
      }).catch((err) => {
        res.status(500).json(err)
      })

  }
  catch (e) {
    console.log(e);
  }

});


router.get('/login/:id', function (req, res, next) {

  console.log("Login informationnnn", req.params.id)
  userHelpers.getLoginDetails(req.params.id).then((response) => {
    console.log(response,"Loginnn response");
    res.json(response)
    // console.log(response.user);
    // userid = response.user._id
    // console.log(userid, "$$$$$$$$$$$");

  })

});


router.post('/login', function (req, res) {
  try {

    const { email, password } = req.body;
    console.log("Login info", req.body)
    userHelpers.doLogin(req.body).then((response) => {
      if (response.status) {
        console.log(response.user);
        userid = response.user._id

        console.log(userid, "$$$$$$$$$$$");
        const accessToken = jwt.sign(
          {
            id: userid,
            email: response.email
          },
          "christy",
          { expiresIn: "7d" });
        res.cookie("accessToken", accessToken,
          { httpOnly: true }).status(200).json({ userid, accessToken })

      } else {
        console.log("-----error---");
      }
    }).catch((err) => {
      console.log(" loginn errrrrrrrrrrrrrrrrrrrr", err);
      // res.status(500).json(err)
    })
  }
  catch (e) {
    console.log(e);
  }

});




router.get('/userpage', function (req, res, next) {

  res.render('user/userpage');

});


router.post('/userpage', function (req, res) {
  console.log("hiiiiiiiiiiiiiiiiiii");
  try {
    const { name,
      address,
      city,
      state,
      email,
      phone,
      companyName,
      companyLogo,
      textdesc1,
      textdesc2,
      textdesc3,
      textdesc4,
      textdesc5,
      textdesc6,
      textdesc7,
      textdesc8,
      textdesc9,
      incubationtype,
      textdesc10 } = req.body;
    console.log("Form details", req.body)

    userHelpers.doformsubmit(req.body).then((response) => {
      if (response) {
        console.log("##############", response);
        res.json({ status: true })
        // res.render('/userpage')
      } else {
        console.log("-----error---");
        // res.redirect('/')
      }
    }).catch((err) => {
      console.log("errrrrrrrrrrrrrrrrrrrr", err);
      res.status(500).json(err)
    })

  }
  catch (e) {
    console.log(e);
  }

});


module.exports = router;
