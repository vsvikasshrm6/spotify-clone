export const createSong = async(req, res)=>{
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
    }
    
  } catch (error) {
    
  }
}