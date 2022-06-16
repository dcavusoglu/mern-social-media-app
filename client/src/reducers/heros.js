export default (heros = [], action) => {
  switch (action.type){
    case 'UPDATE':
    case 'ADD_HERO':
      return heros.map((hero) => hero._id === action.payload._id ? action.payload : hero);
    case 'FETCH_ALL':
      return action.payload ;
      case 'CREATE':
        return [ ...heros, action.payload ];
        case 'DELETE':
        return heros.filter((hero) => hero._id !== action.payload);
    default:
      return heros;
  }
}
