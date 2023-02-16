var express = require('express');
var router = express.Router();
const userHelpers = require('../helpers/user-helpers')
const adminHelpers = require('../helpers/admin-helpers');
const { sLOT_COLLECTION } = require('../config/collections');

const { response } = require('express');




router.get('/adminlogin', function (req, res, next) {

    res.render('admin/login');

});


router.post('/adminlogin', function (req, res) {
    try {
        const { email, password } = req.body;
        console.log("Login info", req.body)
        adminHelpers.doLogin(req.body).then((response, error) => {
            if (response.status) {
                res.json({ status: true })
                // res.render('/userpage')
            } else {

                console.log("-----error---", error);
                // res.redirect('/')
            }
        })
    }
    catch (e) {
        console.log(e);
    }

});



router.get('/applicantlist', function (req, res, next) {
    try {
        console.log("Appplicant info")
        adminHelpers.doapplicantlist().then((applicants) => {
            console.log("@@@@@@@@@@@@@@@@@@", applicants);

            res.status(200).json(applicants)
      
        }).catch((err) => {
            console.log(err.message);
        })

    }
    catch (e) {
        console.log(e);

    }

});



router.get('/checkformsubmission', function (req, res, next) {
    try {
        console.log("Appplicant info")
        adminHelpers.doformcheck().then((applicants) => {
            console.log("@@@@@@@@@@@@@@@@@@", applicants);

            res.status(200).json(applicants)
      
        }).catch((err) => {
            console.log(err.message);
        })

    }
    catch (e) {
        console.log(e);

    }

});


router.get('/applicant/:id', function (req, res, next) {
    try {
        console.log("Appplicant info")
        console.log(req.params.id);
        userid = req.params.id
        adminHelpers.doopen(req.params.id).then((applicants) => {
            console.log("###########", applicants);

            res.status(200).json(applicants)
        }).catch((err) => {
            console.log(err.message);
        })

    }
    catch (e) {
        console.log(e);

    }

});





router.get('/pending/:id', function (req, res, next) {
    try {
        console.log("Appplicant info")
        console.log(req.params.id);
        userid = req.params.id
        adminHelpers.doapplicant(req.params.id).then((applicants) => {
            console.log("###########", applicants);

            res.status(200).json(applicants)
        }).catch((err) => {
            console.log(err.message);
        })

    }
    catch (e) {
        console.log(e);

    }

});



router.get('/approve/:id', function (req, res, next) {
    try {
        console.log("Appplicant info")
        console.log(req.params.id);
        userid = req.params.id
        adminHelpers.doapprove(req.params.id).then((applicants) => {
            console.log("###########", applicants);

            res.status(200).json(applicants)
        }).catch((err) => {
            console.log(err.message);
        })

    }
    catch (e) {
        console.log(e);

    }

});





router.get('/disapprove/:id', function (req, res, next) {
    try {
        console.log("Appplicant info")
        console.log(req.params.id);
        userid = req.params.id
        adminHelpers.dodisapprove(req.params.id).then((applicants) => {
            console.log("###########", applicants);

            res.status(200).json(applicants)
        }).catch((err) => {
            console.log(err.message);
        })

    }
    catch (e) {
        console.log(e);

    }
});





router.get('/slotbook', function (req, res, next) {
    console.log("SLOOOOOOOTTTTT");
    try {
        adminHelpers.getslots().then((slotrow) => {
    console.log("SLOOOOOOOTTTTT 2000000",slotrow);

            res.json(slotrow)
        }).catch((err) => {
            console.log(err.message);
        })

    }
    catch (e) {
        console.log(e);

    }

});


    router.get('/slotoption/:id', function (req, res, next) {
        console.log("Hiiiiiiii");
        try {
            console.log("Appplicant info")
            console.log(req.params.id);
            userid = req.params.id
            adminHelpers.doslot(req.params.id).then((applicants) => {
                console.log("###########", applicants);
                res.status(200).json(applicants)
            }).catch((err) => {
                console.log(err.message);
            })
    
        }
        catch (e) {
            console.log(e);
    
        }
    
    });


    router.get('/slotbox/:id', function (req, res, next) {
        console.log("Hiiiiiiii");
        try {
            console.log("Slot info")
            console.log(req.params.id);
            slotid = req.params.id
            adminHelpers.doslotbox(req.params.id).then((slotboxbook) => {
                console.log("###########", slotboxbook);
                res.status(200).json(slotboxbook)
            }).catch((err) => {
                console.log(err.message);
            })
    
        }
        catch (e) {
            console.log(e);
    
        }
    
    });






module.exports = router;
