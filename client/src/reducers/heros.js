export default (heros = [], action) => {
  switch (action.type){
    case 'FETCH_ALL':
      return heros.payload;
    case 'CREATE':
      return [ ...heros, action.payload ];
    default:
      return heros;
  }
}
