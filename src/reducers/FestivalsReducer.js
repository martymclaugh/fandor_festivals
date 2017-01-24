import { FETCH_JSON } from '../actions/index';

const INITIAL_STATE = { festivalCollections: {}, festivals: {}}

export default function(state = INITIAL_STATE, action){
  switch(action.type) {
  case FETCH_JSON:
    const data = action.payload
    return {...state, festivalCollections: data.festival_collections, festivals: data.festivals}
  default:
    return state
  }
}
