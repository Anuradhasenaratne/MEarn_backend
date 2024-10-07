

const express= require('express');
const app=express();
const cors=require('cors');
const controller = require('./controller')


app.use(cors());

app.use(
    express.urlencoded({
        extended:true,
    })
);

app.use(express.json());

app.get('/users',(req, res) =>{
    
    controller.getUsers(req, res, next =>{
        res.send(users);
    })
});

app.get('/users',(req, res) =>{
    
   const id=req.query.id;
   controller,controller.getUserById(id, user =>{
    res.send(user);
   })
});

app.post('/createuser',(req, res) =>{
    controller.addUser(req.body ,(callback) =>{
        res.send();
    });
 });

 app.post('/updateuser',(req, res) =>{
    controller.updateUser(req.body ,(callback) =>{
        res.send(callback);
    });
 });

 app.post('/deleteuser',(req, res) =>{
    controller.deleteUser(req.body ,(callback) =>{
        res.send(callback);
    });
 });


module.exports =  app;