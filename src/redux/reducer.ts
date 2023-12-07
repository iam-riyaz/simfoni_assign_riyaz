import { act } from "react-dom/test-utils";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST_CATEGORY_PRODUCT,
  FETCH_DATA_SUCCESS_CATEGORY_PRODUCT,
  FETCH_DATA_FAILURE_CATEGORY_PRODUCT,
  FETCH_DATA_REQUEST_ALL_PRODUCT,
FETCH_DATA_SUCCESS_ALL_PRODUCT,
FETCH_DATA_FAILURE_ALL_PRODUCT,
FETCH_DATA_REQUEST_SINGLE_PRODUCT,
FETCH_DATA_SUCCESS_SINGLE_PRODUCT,
FETCH_DATA_FAILURE_SINGLE_PRODUCT,
} from "./action.ts";

interface State {
  productList: any[];
  data: any[]; 
  allProducts:any[];
  singleProduct:any[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  productList: [],
  data: [],
  allProducts:[],
  singleProduct:[],
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
    case FETCH_DATA_FAILURE_CATEGORY_PRODUCT:
      return { ...state, loading: false, error: action.payload };
      case FETCH_DATA_REQUEST_ALL_PRODUCT:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS_ALL_PRODUCT:
      return { ...state, loading: false, allProducts:action.payload, error: null };
    case FETCH_DATA_FAILURE_ALL_PRODUCT:
      return { ...state, loading: false, error: action.payload };
    case FETCH_DATA_REQUEST_SINGLE_PRODUCT:
      return{...state,loading:true,error:null};
    case FETCH_DATA_SUCCESS_SINGLE_PRODUCT:
      return{...state,loading:false,singleProduct:action.payload,error:null };
    case FETCH_DATA_FAILURE_SINGLE_PRODUCT:
      return{...state,loading:false,error:action.payload}
    default:
      return state;
  }
};

export default reducer;
