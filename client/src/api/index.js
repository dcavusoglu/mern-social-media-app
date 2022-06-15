import axios from 'axios';

const url = 'http://localhost:5555/heros';

export const fetchHeros = () => axios.get(url);
export const createHero = (newHero) => axios.post(url, newHero);
