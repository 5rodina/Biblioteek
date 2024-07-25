import { ObjectId } from "bson";
import mongoose from "mongoose";

const authorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    bio:String,
    birthDate:Date,
    books:[{
        type:ObjectId,
        ref:'Book'
    }]
})
const Author=mongoose.model('Author',authorSchema)


export default Author
