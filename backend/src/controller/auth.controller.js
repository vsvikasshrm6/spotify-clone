import { User } from "../models/user.model";

export const callback = async(req, res)=>{
  try {
    const {firstName, lastName, id, imageUrl} = req.body;
    const user = await User.findOne({clerkId : id});
    if(!user){
      User.create({
        fullName : `${firstName} ${lastName}`,
        imageUrl : imageUrl,
        clerkId : id
      })
      res.status(200).json({success : true});
    }
  } catch (error) {
    console.log("Error in auth callBack", error);
    res.status(500).json({message : "Internal Server Error", error})
  }
}