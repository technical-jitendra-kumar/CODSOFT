import userModels from "../models/userModels.js";

export const registerController = async(req,res) => {
    try{
        const {name, email, password} = req.body;
        //validate
        if(!name){
            return res.status(400).send({success:false,message: 'Name is required'});
        }
        if(!email){
            return res.status(400).send({success:false,message: 'Email is required'});
        }
        if(!password){
            return res.status(400).send({success:false,message: 'Password is required'});
        }
        const existingUser = await userModels.findOne({email})
        if(existingUser){
            return res.status(200).send({
                success: false,
                message:'Email is Already in use please login!',
            })
        }
        const user = await userModels.create({name,email,password})
        return res.status(201).send({
            success:true,
            message:'User created successfully',
            user})
    } catch(error){
        console.log(error)
        res.status(400).send({
            message: "Error registering user",
            success:false,
            error
        })
    }
};