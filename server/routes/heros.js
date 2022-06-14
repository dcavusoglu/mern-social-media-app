import express from "express";
import { getHeros, createHero} from '../controllers/heros.js';

const router = express.Router();

router.get('/', getHeros);
router.post('/', createHero);

export default router
