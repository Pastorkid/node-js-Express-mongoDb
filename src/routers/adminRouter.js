const express=require('express');
const {MongoClient}=require('mongodb');
const sessions=require('../data/sessions.json')
const adminRouter=express.Router();

adminRouter.route('/').get((req,res)=>{
     const url=
     'mongodb+srv://dbUser:RwvRnkl5b2Tuq7uP@globamantics.3oe6f2a.mongodb.net/?retryWrites=true&w=majority';
     const dbName='Globamantics';

     (async function mongo(){
        let client;
         try{
             client=await MongoClient.connect(url);
             console.log('connected to the mongodb');

             const db=client.db(dbName);
             const response=await db.collection('sessions').insertMany(sessions);
             res.json (response);
            }catch (error){
                console.log(error.stack);
            }
     }())
})
module.exports=adminRouter;