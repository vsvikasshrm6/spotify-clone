import { Song } from './../models/song.model';
import cloudinary from '../utils/cloudinary';

export const createSong = async(req, res)=>{
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
    }
    const {title, duration,artist, album  } = req.body;
    const audioFile = req.files.audioFile;
    const imageFile = req.files.imageFile;
    if(!title || !duration || !artist || !audioFile || !imageFile){
      return res.status(500).json({message : "Please provide all details"});
    }
    const audioUrl = (await cloudinary.uploader.upload(audioFile)).secure_url;
    const imageUrl = (await cloudinary.uploader.upload(imageFile)).secure_url;


    await Song.create({
      title,
      duration,
      artist,
      album : (album) ? album : null,
      imageUrl,
      audioUrl
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).json({error : "Error in uploading song"})
  }
}
//delete song , create album , delete album
