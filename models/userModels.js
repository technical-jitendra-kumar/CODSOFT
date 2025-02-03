import mongoose from "mongoose";
import validator from "validator";
//schema
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:['true','name is require']
    },
    lastName:{
        type:String,

    },
    email:{
        type:String,
        required:['true','email is require'],
        unique:true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password length should be greater than 6'], 
    },
    location:{
        type:String,
       default : 'india'
    },
},
{timestamps:true,}
);
export default mongoose.model('User', userSchema);