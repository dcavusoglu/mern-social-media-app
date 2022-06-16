import axios from 'axios';

const url = 'http://localhost:5555/heros';

export const fetchHeros = () => axios.get(url);
export const createHero = (newHero) => axios.post(url, newHero);
export const updateHero = (id, updatedHero) => axios.patch(`${url}/${id}`, updatedHero);
export const deleteHero = (id) => axios.delete(`${url}/${id}`);
export const addHero = (id) => axios.patch(`${url}/${id}/addHero`);
