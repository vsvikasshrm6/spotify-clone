import { Album } from "../models/album.model.js"

export const getAllAlbum = async (req, res)=>{
    try {
        const albums = await Album.find();
        return res.status(200).json(albums);
    } catch (error) {
        console.log("Error in getting all album" + error)
        return res.status(500).json({error : "Internal server Error"});
    }
}

export const getAlbum = async (req, res)=>{
    try {
        const albumId = req.params;
        const album = await Album.findById(albumId).populate("songs");
        if(!album){
            return res.status(404).json({error : "Album not found"});
        }
        return res.status(200).json(albums);
    } catch (error) {
        console.log("Error in getting album"+ error)
        return res.status(500).json({error : "Internal server Error"});
    }
}