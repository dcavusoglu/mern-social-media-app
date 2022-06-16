import express from "express";
import { getHeros, createHero, updateHero, deleteHero, addHero } from '../controllers/heros.js';

const router = express.Router();

router.get('/', getHeros);
router.post('/', createHero);
router.patch('/:id', updateHero);
router.delete('/:id', deleteHero);
router.patch('/:id/addHero', addHero);
export default router
