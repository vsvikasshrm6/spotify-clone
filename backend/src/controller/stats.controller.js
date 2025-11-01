import { Album } from "../models/album.model.js";
import { Song } from "../models/song.model.js";
import { User } from './../models/user.model.js';

export async function getAllStats(req, res) {
  try {
    // const songsCount = await Song.countDocuments();
    // const albumCount = await Song.countDocuments();
    // const userCount = await User.countDocuments();

    const [songsCount, albumCount, userCount, uniqueArtist] = await Promise.all([
      Song.countDocuments(),
      Album.countDocuments(),
      User.countDocuments(),
      Song.aggregate([{
        $unionWith : {
          coll: "Album",
          pipeline : [],
        },
        
      
      },
      {
        $group : {
          _id : "$artist",
        }
      },
      {
        $count : "count" 
      }
    ])
    ])

    res.status(200).json({
      albumCount, userCount, songsCount, totalArtist : uniqueArtist[0]?.count || 0,
    })

  } catch (error) {
    console.log("Error in getting All Stats");
    res.status(500).json({error : "Internal Server Error"});
  }
  
}