import * as api from '../api';

// Action creators

export const getHeros = () => async (dispatch) => {

  try {
    const { data } = await api.fetchHeros();
    dispatch({ type: 'FETCH_ALL', payload : data });

  } catch (error) {
    console.log(error.message);
  }
};

export const createHero = (hero) => async (dispatch) => {

  try {
    const { data } = await api.createHero(hero);
    dispatch({ type: 'CREATE', payload: data })
  } catch (error) {
    console.log(error);
  }
}
