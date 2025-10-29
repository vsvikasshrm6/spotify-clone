import { Album } from "../models/album.model.js";
import { Song } from "../models/song.model.js";
import { User } from './../models/user.model.js';

export async function getAllStats(req, res) {
  try {
    // const songsCount = await Song.countDocuments();
    // const albumCount = await Song.countDocuments();
    // const userCount = await User.countDocuments();

    const [songsCount, albumCount, userCount] = await Promise.all([
      Song.countDocuments(),
      Album.countDocuments(),
      User.countDocuments()
    ])

  } catch (error) {
    
  }
  
}