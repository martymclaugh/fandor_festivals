export const FETCH_JSON = 'FETCH_JSON';

export function fetchJson(){
  const FestivalsJson = require('../../api/festivals.json');
  return {
    type: FETCH_JSON,
    payload: FestivalsJson
  };
}
