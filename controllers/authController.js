import userModels from "../models/userModels.js";

export const registerController = async(req,res,next) => {
    try{
        const {name, email, password} = req.body;
        //validate
        if(!name){
           next('Name is required');
        }
        if(!email){
            next('Email is required');
        }
        if(!password){
            ('Password is required and greater than 6 character');
        }
        const existingUser = await userModels.findOne({email})
        if(existingUser){
            next("Email is Already in use please login!");
        }
        const user = await userModels.create({name,email,password})
        return res.status(201).send({
            success:true,
            message:'User created successfully',
            user})
    } catch(error){
        next(error);
    }
};