const express = require('express');
const app = express()
const port = 3000

const { Admin , Event } = require('./models');

const cors = require("cors");
const { comparePassword } = require('./helpers/bcrypt');
const { signToken } = require("./helpers/jwt");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/registerAdmin',async(req , res)=>{
  try {
    const {username, email , password} = req.body;
    const admin = await Admin.create({ username, email, password });
    res.status(201).json({ id: admin.id, email: admin.email });
  } catch (error) {
    if (
      error.name === "SequelizeValidationError" ||
      error.name === "SequelizeUniqueConstraintError"
    ) {
      res.status(400).json({ message: error.errors[0].message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
    console.log(error);
  }
});

app.post('/loginAdmin', async(req , res)=>{
  try {
    const {email , password} = req.body;
    const user = await Admin.findOne({Where : email});
    if(!user){
      throw { message : "UserNotFound" };
    }
    const passValid = comparePassword(password , user.password);
    if(!passValid){
      throw { message : "UserNotFound"};
    }
    const token = signToken({ id: user.id , email: user.email})
    res.status(200).json({ access_token: token });
  } catch (error) {
    console.log(error);
    if (error.name === "SequelizeValidationError") {
      res.status(400).json({ message: error.errors[0].message });
    } else if (error.message === "UserNotFound") {
      res.status(500).json({ message: "Invalid email/password" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

app.get('/events', async(req , res)=>{
  try {
    const event = await Event.findAll();
    res.status(200).json(event)
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Internal Server Error"})
  }
});

app.post('/events', async(req,res)=>{
  try {
    console.log(req.body);
    
    const {title , date , thumbnail , venue , description } = req.body;
    const event = await Event.create({title , date , thumbnail , venue , description })
    console.log(event);
    res.status(201).json(`Created New Event ${title}`)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.put('/events/:id', async(req,res)=>{
  try {
    const {id} = req.params
    const {title , date , thumbnail , venue , description } = req.body
    const event = await Event.update(
      {title , date , thumbnail , venue , description },
      {where :{id : id}}
    )
    if(!event){
      return {message:'NotFound'}
    }
    res.status(200).json({message : "Event has been Updated"})
  } catch (error) {
    if (error.name === "NotFound") {
      res.status(404).json({ message: "Category Not Found" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

app.delete('/events/:id' , async(req,res)=>{
  try {
    const {id} = req.params
    const event = await event.findByPk(id)
    if(!event){
      throw {message : 'NotFound'}
    }
    await Event.destroy({where :{id}})
    res.status(200).json({message : "Event Deleted"})
  } catch (error) {
    console.log(error);
  }
});