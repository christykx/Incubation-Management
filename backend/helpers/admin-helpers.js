var db = require('../config/connection')
var collection = require('../config/collections')
const bcrypt = require('bcrypt')
//const Promise=require('promise')
const { response } = require('express')
var objectId = require('mongodb').ObjectId


module.exports = {

    doLogin: (userData) => {
        try{
        return new Promise(async (resolve, reject) => {
            let loginStatus = false
            let response = {}
            let user = { email: "admin@gmail.com", password: "admin" }
            // let user=await db.get().collection(collection.USER_COLLECTION).findOne({email:userData.email})

            if (user.email == userData.email) {

                if (userData.password == user.password) {
                    // if(status){
                    console.log("Login success")
                    response.user = user
                    response.status = true
                    resolve(response)
                } else {
                    console.log("login fail")
                    resolve({ status: false })
                }
                // }
            } else {
                let err = "Login failed"
                reject(err)
                console.log("Login failed")
            }
        }).catch((err) => {
            console.log(err);
            return err;
        })

    }  catch (e) {
        console.log(e);
      }
    
    },


    doapplicantlist: async () => {
        try {
            return await new Promise(async (resolve, reject) => {
                let applicants = await db.get().collection(collection.USER_COLLECTION).find().toArray()
                console.log("Printing all applicants")
                console.log(applicants)
                resolve(applicants)

            })
        } catch (err) {
            console.log(err)
            return err
        }
    },

    doapplicant: async (userid) => {
        try {
            return await new Promise(async (resolve, reject) => {
                console.log("HEEEEEEEEEElllllllloooooooooooooooo")
                console.log(objectId(userid))
                // let applicants = await db.get().collection(collection.USER_COLLECTION).findOne({_id:objectId(userid)})
                let applicants = await db.get().collection(collection.USER_COLLECTION).findOneAndUpdate(
                    { _id: objectId(userid) },
                    { $set: { isPending: true } }
                )
                console.log("Printing applicant details")
                console.log(applicants)
                resolve(applicants)

            })
        } catch (err) {
            console.log(err)
            return err
        }
    },

    
    doopen: async (userid) => {
        try {
            return await new Promise(async (resolve, reject) => {
                console.log("HEEEEEEEEEElllllllloooooooooooooooo")
                console.log(objectId(userid))
                let applicants = await db.get().collection(collection.USER_COLLECTION).findOne({_id:objectId(userid)})
             
                console.log("Printing applicant details")
                console.log(applicants)
                resolve(applicants)

            })
        } catch (err) {
            console.log(err)
            return err
        }
    },


    doapprove: async (userid) => {
        try {
            return await new Promise(async (resolve, reject) => {
                console.log("HEEEEEEEEEElllllllloooooooooooooooo")
                console.log(objectId(userid))
                // let applicants = await db.get().collection(collection.USER_COLLECTION).findOne({_id:objectId(userid)})
                let applicants = await db.get().collection(collection.USER_COLLECTION).findOneAndUpdate(
                    { _id: objectId(userid) },
                    { $set: { isApprove: true } }
                )
                console.log("Printing applicant details")
                console.log(applicants)
                
                resolve(applicants)

            })
        } catch (err) {
            console.log(err)
            return err
        }
    },



    
    dodisapprove: async (userid) => {
        try {
            return await new Promise(async (resolve, reject) => {
                console.log("HEEEEEEEEEElllllllloooooooooooooooo")
                console.log(objectId(userid))
                // let applicants = await db.get().collection(collection.USER_COLLECTION).findOne({_id:objectId(userid)})
                let applicants = await db.get().collection(collection.USER_COLLECTION).findOneAndUpdate(
                    { _id: objectId(userid) },
                    { $set: { isDisapprove: true } }
                )
                console.log("Printing applicant details")
                console.log(applicants)
                resolve(applicants)

            })
        } catch (err) {
            console.log(err)
            return err
        }
    },

    doslot: async (userid) => {
        try {
            return await new Promise(async (resolve, reject) => {
                console.log("HEEEEEEEEEElllllllloooooooooooooooo")
                console.log(objectId(userid))
                // let applicants = await db.get().collection(collection.USER_COLLECTION).findOne({_id:objectId(userid)})
                let applicants = await db.get().collection(collection.USER_COLLECTION).findOneAndUpdate(
                    { _id: objectId(userid) },
                    { $set: { isSlotbooked: true } }
                )
                console.log("Printing applicant details")
                console.log(applicants)
                resolve(applicants)

            })
        } catch (err) {
            console.log(err)
            return err
        }
    },

    doslotbooking:async () => {

        try {
            return await new Promise(async (resolve, reject) => {

                db.get().collection(collection.SLOT_COLLECTION).insertMany(
                    [
                        {
                            // _id: 1,
                            name:'A1'
                        },
                        {
                            // _id: 2,
                            name:'A2'
                        },
                        {
                            // _id: 3,
                            name:'A3'
                        },
                        {
                            // _id: 4,
                            name:'A4'
                        }, 
                        {
                            // _id: 5,
                            name:'A5'
                        },
                         {
                            // _id: 6,
                            name:'A6'
                        },
                        {
                            // _id: 7,
                            name:'A7'
                        },
                        {
                            // _id: 8,
                            name:'A8'
                            
                        },
                        {
                            // _id: 9,
                            name:'A9'

                        },
                        {
                            // _id: 10,
                            name:'A10'

                        },
                        {
                            // _id: 10,
                            name:'B1'

                        },
                        {
                            // _id: 10,
                            name:'B2'

                        },
                        {
                            // _id: 10,
                            name:'B3'

                        },
                        {
                            // _id: 10,
                            name:'B4'

                        },
                        {
                            // _id: 10,
                            name:'B5'

                        },
                        {
                            // _id: 10,
                            name:'B6'

                        },
                        {
                            // _id: 10,
                            name:'B7'

                        },
                        {
                            // _id: 10,
                            name:'B8'

                        },
                        {
                            // _id: 10,
                            name:'B9'

                        },
                        {
                            // _id: 10,
                            name:'B10'

                        },
                        {
                            // _id: 10,
                            name:'C1'

                        },
                        {
                            // _id: 10,
                            name:'C2'

                        },
                        {
                            // _id: 10,
                            name:'C3'

                        },
                        {
                            // _id: 10,
                            name:'C4'

                        },
                        {
                            // _id: 10,
                            name:'C5'

                        },
                        {
                            // _id: 10,
                            name:'C6'

                        },
                        {
                            // _id: 10,
                            name:'C7'

                        },
                        {
                            // _id: 10,
                            name:'C8'

                        },
                        {
                            // _id: 10,
                            name:'C9'

                        },
                        {
                            // _id: 10,
                            name:'C10'

                        },
                        {
                            // _id: 10,
                            name:'D1'

                        },
                        {
                            // _id: 10,
                            name:'D2'

                        },
                        {
                            // _id: 10,
                            name:'D3'

                        },
                        {
                            // _id: 10,
                            name:'D4'

                        },
                        {
                            // _id: 10,
                            name:'D5'

                        },
                        {
                            // _id: 10,
                            name:'D6'

                        },
                        {
                            // _id: 10,
                            name:'D7'

                        },
                        {
                            // _id: 10,
                            name:'D8'

                        },
                        {
                            // _id: 10,
                            name:'D9'

                        },
                        {
                            // _id: 10,
                            name:'D10'

                        },
                        {
                            // _id: 10,
                            name:'E1'

                        },
                        {
                            // _id: 10,
                            name:'E2'

                        },
                        {
                            // _id: 10,
                            name:'E3'

                        },
                        {
                            // _id: 10,
                            name:'E4'

                        },
                        {
                            // _id: 10,
                            name:'E5'

                        },
                        {
                            // _id: 10,
                            name:'E6'

                        },
                        {
                            // _id: 10,
                            name:'E7'

                        },
                        {
                            // _id: 10,
                            name:'E8'

                        },
                        {
                            // _id: 10,
                            name:'E9'

                        },
                        {
                            // _id: 10,
                            name:'E10'

                        },
                        {
                            // _id: 10,
                            name:'F1'

                        },
                        {
                            // _id: 10,
                            name:'F2'

                        },
                        {
                            // _id: 10,
                            name:'F3'

                        },
                        {
                            // _id: 10,
                            name:'F4'

                        },
                        {
                            // _id: 10,
                            name:'F5'

                        },
                        {
                            // _id: 10,
                            name:'F6'

                        },
                        {
                            // _id: 10,
                            name:'F7'

                        },
                        {
                            // _id: 10,
                            name:'F8'

                        },
                        {
                            // _id: 10,
                            name:'F9'

                        },
                        {
                            // _id: 10,
                            name:'F10'

                        }
                    ]
                ).then((data) => {
                    console.log("----ROW 1 SLOTSSSSSSS---", data)
                    // console.log("$$$$$$$$$$$$$$$", userData._id);
                    resolve(data)
                })
            })
        } catch (err) {
            console.log("errrrrrrrrrrrrrrrrrrrr", err)
            return err
        }

    },
    getslots:() => {

        try {
            return new Promise(async (resolve, reject) => {

                let slotrow=await db.get().collection(collection.SLOT_COLLECTION).find().toArray()

                    console.log("----ROW 1 SLOTSSSSSSS---", slotrow)
                    // console.log("$$$$$$$$$$$$$$$", userData._id);
              resolve(slotrow)
            })
        } catch (err) {
            console.log("errrrrrrrrrrrrrrrrrrrr", err)
            return err
        }

    },
    
    doslotbox: async (slotid) => {
        try {
            return await new Promise(async (resolve, reject) => {
                console.log("HEEEEEEEEEElllllllloooooooooooooooo")
                console.log(objectId(slotid) )

                // let applicants = await db.get().collection(collection.USER_COLLECTION).findOne({_id:objectId(userid)})
                let slotboxbook = await db.get().collection(collection.SLOT_COLLECTION).findOneAndUpdate(
                    { _id: objectId(slotid)  },
                    { $set: { isSlotboxbooked: true } }
                )
                console.log("Printing slot info")
                console.log(slotboxbook)
                resolve(slotboxbook)

            }).catch((err)=>{
                console.log(err.message);
            })
        } catch (err) {
            console.log(err)
            return err
        }
    },


}