import { Song } from './../models/song.model.js';
import cloudinary from '../utils/cloudinary';
import { Album } from './../models/album.model.js';

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

export const deleteSong = async(req, res)=>{
  try {
    const {id} = req.params;
    const song = await Song.findByIdAndDelete(id);
    if(!song){
      return res.status(500).json({error : "Invalid song deletion request"})
    }

  } catch (error) {
    console.log("Error in song deletion request" + error);
    return res.status(500).json({error : "Error in song deletion request"});
  }
}
export const createAlbum = async(req, res)=>{
  try {
    const {title, artist, releasedYear} = req.body;
  const imageFile = req.files.imageFile;
  const result = await cloudinary.uploader.upload(imageFile);
  const imageUrl = result.secure_url;
  const album = new Album({
    title,
    artist,
    releasedYear,
    imageUrl
  });
  await album.save();
  } catch (error) {
    console.log("Error in album creation request" + error);
    return res.status(500).json({error : "Error in album creation request"});
  }
  


}
export const deleteAlbum = async(req, res)=>{
  try {
    const {id} = req.params;
    const album = await Album.findByIdAndDelete(id);
    if(album){
      await Song.delete({albumId : album._id})
    }
    if(!album){
      return res.status(500).json({error : "Invalid album deletion request"})
    }

  } catch (error) {
    console.log("Error in album deletion request" + error);
    return res.status(500).json({error : "Error in album deletion request"});
  }
}
//delete song , create album , delete album
