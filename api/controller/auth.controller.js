import User from "../models/user.model.js";
import bcryptjs from 'bcrypt';
export const signup = async function(req,res){
    const {username , email , password} = req.body;
    const hashPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username , email , password:hashPassword});
    try {
        await newUser.save();
        res.status(201).json({message:"user created successfully"})    
    } catch (error) {
        res.status(501).json(error.message);
    }
    
};