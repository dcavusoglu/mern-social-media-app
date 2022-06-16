import mongoose from "mongoose";
import HeroPost from "../models/heroPost.js";

export const getHeros = async (req, res) => {

  try {
    const heroDetails = await HeroPost.find();

    res.status(200).json(heroDetails);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createHero = (req, res) => {

  const hero = req.body;

  const newHero = new HeroPost(hero);
  try {
    newHero.save();
    res.status(201).json(newHero);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}


export const updateHero = async (req, res) => {
  const {id: _id} = req.params;
  const hero = req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No hero with id');

  const updatedHero = await HeroPost.findByIdAndUpdate(_id, {...hero, _id}, {new: true});
  res.json(updatedHero);
}

export const deleteHero = async (req, res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No hero with id');

  try {
    await HeroPost.findByIdAndRemove(id);
    res.json({ message: 'Hero deleted successfully!'});
  } catch (error) {
    console.log(error);
  }
}

export const addHero = async (req, res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No hero with id');
  const hero = await HeroPost.findById(id);
  const updatedHero = await HeroPost.findByIdAndUpdate(id, { addCount: hero.addCount + 1 }, { new: true });

  res.json(updatedHero);
}
