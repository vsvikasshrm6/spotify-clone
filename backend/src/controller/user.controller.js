import { User } from './../models/user.model.js';



export async function getAllUser(req, res) {

  try {
    const clerkId = req.auth.userId;
    const user = await User.find({clerkId : {$ne : clerkId}});
    return res.status(200).json(user);

  } catch (error) {
    console.log("Error in getting all user" + error);
    res.status(500).json({error : "Internal server Error"})
  }
}