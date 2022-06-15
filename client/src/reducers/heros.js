export default (heros = [], action) => {
  switch (action.type){
    case 'UPDATE':
      return heros.map((hero) => hero._id === action.payload._id ? action.payload : hero);
    case 'FETCH_ALL':
      return action.payload ;
    case 'CREATE':
      return [ ...heros, action.payload ];
    default:
      return heros;
  }
}
