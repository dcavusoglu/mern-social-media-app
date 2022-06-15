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
