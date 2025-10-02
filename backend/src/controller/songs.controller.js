import { Song } from "../models/song.model.js";

export const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    return res.status(200).json(songs);
  } catch (error) {
    console.log("Error in getting All songs" + error);
    res.status(500).json({ error: "Internal server Error" });
  }
};
export const getFeaturedSongs = async (req, res) => {
  try {
    const songs = await Song.aggregate([
      { size: 6 },
      {
        title: 1,
        artist: 1,
        imageUrl: 1,
        duration: 1,
        albumId: 1,
        audioUrl: 1,
      },
    ]);
    return res.status(200).json(songs);
  } catch (error) {
    console.log("Error in getting featured songs" + error);
    res.status(500).json({ error: "Internal server Error" });
  }
};

export const getMadeForYouSongs = async (req, res) => {
  try {
    const songs = await Song.aggregate([
      { size: 6 },
      {
        title: 1,
        artist: 1,
        imageUrl: 1,
        duration: 1,
        albumId: 1,
        audioUrl: 1,
      },
    ]);
    return res.status(200).json(songs);
  } catch (error) {
    console.log("Error in getting featured songs" + error);
    res.status(500).json({ error: "Internal server Error" });
  }
};
export const getTrendingSongs = async (req, res) => {
  try {
    const songs = await Song.aggregate([
      { size: 6 },
      {
        title: 1,
        artist: 1,
        imageUrl: 1,
        duration: 1,
        albumId: 1,
        audioUrl: 1,
      },
    ]);
    return res.status(200).json(songs);
  } catch (error) {
    console.log("Error in getting featured songs" + error);
    res.status(500).json({ error: "Internal server Error" });
  }
};