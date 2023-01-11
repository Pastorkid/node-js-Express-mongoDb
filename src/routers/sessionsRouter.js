const express=require('express')
const {MongoClient}=require('mongodb');
const sessions=require('../data/sessions.json')
const sessionsRouter=express.Router();

sessionsRouter.route('/')
   .get((req,res)=>{
    const url=
    'mongodb+srv://dbUser:RwvRnkl5b2Tuq7uP@globamantics.3oe6f2a.mongodb.net/?retryWrites=true&w=majority';
    const dbName='Globamantics';

    (async function mongo(){
       let client;
        try{
            client=await MongoClient.connect(url);
            console.log('connected to the mongodb');

            const db=client.db(dbName);
            const sessions=await db.collection('sessions').find().toArray();
            res.render(sessions,{sessions});
           }catch (error){
               console.log(error.stack);
           }
           client.close();
    })();

   })

   sessionsRouter.route('/:id')
    .get((req,res)=>{
        const id=req.params.id;
        res.render('session',{session:sessions[id]})
    })

    module.exports=sessionsRouter;