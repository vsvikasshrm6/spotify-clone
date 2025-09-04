import { mongoose } from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName : {type : String, required : true},
    clerkId : {type : String, required : true},
    imageUrl : {type : String, required : true}
}, {timeStamps : true})

export const User = mongoose.model("User", userSchema);
