
// actions.ts
import { Dispatch } from 'redux';
import axios from 'axios';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    try {

        const options = {
            method: 'GET',
            url: 'https://wayfair.p.rapidapi.com/categories/list',
            params: {caid: '214970'},
            headers: {
              'X-RapidAPI-Key': '457ffd2163msh7dda4e02a1bb347p1d508djsnf9754e7b9e0b',
              'X-RapidAPI-Host': 'wayfair.p.rapidapi.com'
            }
          };

      const response = await axios.request(options);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
    } catch (error:any) {
      dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
    }
  };
};
