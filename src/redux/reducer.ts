// reducers.ts
import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
  } from './action.ts';
  
  interface State {
    data: any[]; // Adjust the type according to your API response structure
    loading: boolean;
    error: string | null;
  }
  
  const initialState: State = {
    data: [],
    loading: false,
    error: null,
  };
  
  const reducer = (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_DATA_SUCCESS:
        return { ...state, loading: false, data: action.payload, error: null };
      case FETCH_DATA_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  