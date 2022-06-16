import { FETCH_ALL, CREATE, UPDATE, DELETE, ADD_HERO } from '../constants/actionTypes';
import * as api from '../api';

// Action creators

export const getHeros = () => async (dispatch) => {

  try {
    const { data } = await api.fetchHeros();
    dispatch({ type: FETCH_ALL, payload : data });

  } catch (error) {
    console.log(error);
  }
};

export const createHero = (hero) => async (dispatch) => {

  try {
    const { data } = await api.createHero(hero);
    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error);
  }
}

export const updateHero = (id, hero) => async (dispatch) => {
  try {
    const { data } = await api.updateHero(id, hero);
    dispatch({ type: UPDATE, payload: data })
  } catch (error) {
    console.log(error);
  }
}


export const deleteHero = (id) => async (dispatch) => {
  try {
    await api.deleteHero(id);
    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.log(error);
  }
}

export const addHero = (id) => async (dispatch) => {
  try {
    const { data } = await api.addHero(id);
    dispatch({ type: ADD_HERO, payload: data })
  } catch (error) {
    console.log(error);
  }
}
