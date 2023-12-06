import { act } from "react-dom/test-utils";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST_CATEGORY_PRODUCT,
  FETCH_DATA_SUCCESS_CATEGORY_PRODUCT,
  FETCH_DATA_FAILURE_CATEGORY_PRODUCT,
} from "./action.ts";

interface State {
  productList: any[];
  data: any[]; // Adjust the type according to your API response structure
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  productList: [],
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
    case FETCH_DATA_REQUEST_CATEGORY_PRODUCT:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS_CATEGORY_PRODUCT:
      return { ...state, loading: false, productList:action.payload, error: null };
    case FETCH_DATA_REQUEST_CATEGORY_PRODUCT:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
