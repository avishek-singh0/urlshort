const User = require("../models/user")

exports.handleUserSignup = async(req,res) =>{
 const {name,email,password}  = req.body
const userinfo =  await User.create({
    fullName:name, 
    email:email,
    password:password,
 });
return res.status(201).json(
    {
         userinfo
    }
)

}

exports.handleUserlogin = async(req,res) =>{
    const {email,password}  = req.body
 try {

   if(!uservaildinfo){
    return res.redirect("/login",{
        error:"invaild"
    })
} 

const uservaildinfo = await User.findOne({
    email:email,
    password:password,
        
})

return res.status(201).json(
    {
         uservaildinfo
    }
)

 } catch (error) {
    return res.json(
        {
             status:"NOt vaild email or password"
        }
    )
    
 } 
   
   }