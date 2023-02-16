var db = require('../config/connection')
var collection = require('../config/collections')
const bcrypt = require('bcrypt')
//const Promise=require('promise')
const { response } = require('express')
var objectId = require('mongodb').ObjectId


module.exports = {
    doSignup: (userData) => {
        try {
            console.log(userData);
            let findemail = userData.email
            return new Promise(async (resolve, reject) => {
                let userCheck = await db.get().collection(collection.USER_COLLECTION).findOne({ email: findemail })
                userData.password = await bcrypt.hash(userData.password, 10)
                if (userCheck) {
                    let err = 'Email id already exist'
                    reject(err)
                }
                else {
                    db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data) => {
                        console.log("----userdat---", userData);
                        console.log("$$$$$$$$$$$$$$$", userData._id);
                        resolve(userData, { userid: userData._id })
                    }).catch((err) => {
                        console.log("do signup catch", err);
                        reject(err)
                    })
                }
            })
        } catch (e) {
            console.log(e);
        }


    },



    getLoginDetails: (userid) => {
        try {
            return new Promise(async (resolve, reject) => {
                console.log(userid, "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                let userdetails = await db.get().collection(collection.USER_COLLECTION).findOne({ _id: objectId(userid) })
                console.log(userdetails, ">>>>>>>>>>>>>>>");
                resolve(userdetails)
            })
        }
        catch (e) {
            console.log(e);
        }


    },

    doLogin: (userData) => {
        try {
            return new Promise(async (resolve, reject) => {
                // let loginStatus = false
                let response = {}
                let user = await db.get().collection(collection.USER_COLLECTION).findOne({ email: userData.email })

                if (user) {
                    bcrypt.compare(userData.password, user.password).then((status) => {
                        if (status) {
                            console.log("Login success")
                            console.log(user._id);
                            response.user = user
                            response.status = true
                            // db.get().collection(collection.USER_COLLECTION).updateOne({_id:user._id},{$push:{isSubmit:false}})
                            // db.get().collection(collection.USER_COLLECTION).findOneAndUpdate(
                            //     { _id: objectId(user._id) },
                            //     { $set: { isSubmitted: false } }
                            // )
                            resolve(response)
                        } else {
                            let err="Please check your Password"
                            console.log("login fail")
                            console.log("Please check your Password");
                            // resolve({ status: false })
                            reject (err)
                        }
                    }).catch((err) => {
                        console.log(err);
                        reject(err);
                    })
                } else {
                    let err2 = "Please check your Email id"
                    console.log( "Please check your Email id");
                    // reject(err2)
                    // console.log("Login failed")
                }
            })
            //.catch((err) => {
            //     console.log(err);
            //     return err;
            // })
        }
        catch (e) {
            console.log(e);
        }

    },

    doformsubmit: (userData) => {

        try {
            console.log("33333333333333", userData);
            let findemail = userData.email

            return new Promise(async (resolve, reject) => {
                console.log(findemail);
                let userCheck = await db.get().collection(collection.USER_COLLECTION).findOne({ email: findemail })
                if (userCheck) {

                    db.get().collection(collection.USER_COLLECTION).findOneAndUpdate(
                        { email: findemail },
                        { $set: { userData, isPending: false } },
                    )
                    resolve(response)
                }
                else {
                    let err = 'Email does not match'
                    return err;
                }

            })
        } catch (e) {
            console.log(e);
        }

    },

    // doformsubmit: (userData) => {

    //     try {
    //         console.log("33333333333333", userData);
    //         let findemail = userData.email
    //         return new Promise(async (resolve, reject) => {
    //             console.log(findemail);
    //             db.get().collection(collection.USER_COLLECTION).findOne({ email: findemail }).then((userCheck) => {
    //                 if (userCheck) {

    //                     db.get().collection(collection.USER_COLLECTION).findOneAndUpdate(
    //                         { email: findemail },
    //                         { $set: { userData, isPending: false } },
    //                     )
    //                     resolve(response)
    //                 }
    //                 else {
    //                     let err = 'Email does not match'
    //                    return err;


    //                 }

    //             }).catch((err) => {
    //                 console.log(err);
    //                 reject(err);
    //             })



    //         })
    //     } catch (e) {
    //         console.log(e);
    //     }

    // },


}