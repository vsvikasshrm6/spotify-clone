import { clerkClient, getAuth } from '@clerk/express'


export const isAdmin = async(req, res, next)=>{
    try {
        const { userId } = getAuth(req);
        const user = await clerkClient.users.getUser(userId);
        if(user.primaryEmailAddress !== process.env.ADMIN_EMAIL_ID){
            return res.status(400).json({message : "User not authorised"});
        }
        next()
    } catch (error) {
        console.log("Error in checking Admin rights" + error);
        res.status(500).json({message : "Error in checking admin rights", error})
    }
}