import {INSERT,UPDATE,DELETE,UPDATE_INDEX} from './actions'
import {addToLoacalStorage,getFromLocalStorage} from '../utils/storage';

const initState = {
  currentIndex: -1,
  list: []//getFromLocalStorage('trexes')
}


export const reducer = (state=initState, action={}) => {
  switch (action.type) {
    case INSERT:
      state.list.push(action.payload);
      // addToLoacalStorage('trxes', [...state.list]);
      return {...state, list:[...state.list], currentIndex:-1}
    case UPDATE:
      console.log('UPDATE',state);
      state.list[state.currentIndex] = action.payload;
      // addToLoacalStorage('trxes', [...state.list]);
      return {...state, list:[...state.list], currentIndex:-1 }
    case UPDATE_INDEX:
      return {...state, currentIndex:action.payload}
    case DELETE:
      state.list.splice(action.payload, 1);
      // addToLoacalStorage('trxes', [...state.list]);
      return {...state, list:[...state.list], currentIndex:-1}
    default:
      return {...state}
  }
}
