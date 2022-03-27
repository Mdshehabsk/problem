const route = require('express').Router()
const {userRegister,userLogin, userEdit, userDelete} = require('../controller/userController')
const user = require('../schema/userSchema')
const LoginValidate = require('../validation/LoginValidation')
const userValidate = require('../validation/userValidation')
route.get('/',async (req,res,next)=>{
    const allUser =await user.find();
    res.cookie('sajid', 'good')
    res.status(201).json(allUser)
})

route.post('/register',userValidate, userRegister)
route.post('/login',LoginValidate,userLogin)
route.put('/edit/:id',userValidate, userEdit)
route.delete('/delete/:id', userDelete)


module.exports = route

