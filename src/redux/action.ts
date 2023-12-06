import { CategoriesSection } from "./../components/Categories/index";

import { Dispatch } from "redux";
import axios from "axios";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const FETCH_DATA_REQUEST_CATEGORY_PRODUCT =
  "FETCH_DATA_REQUEST_CATEGORY_PRODUCT";
export const FETCH_DATA_SUCCESS_CATEGORY_PRODUCT =
  "FETCH_DATA_SUCCESS_CATEGORY_PRODUCT";
export const FETCH_DATA_FAILURE_CATEGORY_PRODUCT =
  "FETCH_DATA_FAILURE_CATEGORY_PRODUCT";

  export const FETCH_DATA_REQUEST_ALL_PRODUCT =
  "FETCH_DATA_REQUEST_ALL_PRODUCT";
export const FETCH_DATA_SUCCESS_ALL_PRODUCT =
  "FETCH_DATA_SUCCESS_ALL_PRODUCT";
export const FETCH_DATA_FAILURE_ALL_PRODUCT =
  "FETCH_DATA_FAILURE_ALL_PRODUCT";

  const apikey= import.meta.env.VITE_APIKEY

export const fetchData = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    try {
      const options = {
        method: "GET",
        url: "https://wayfair.p.rapidapi.com/categories/list",
        params: { caid: "214970" },
        headers: {
          "X-RapidAPI-Key":
            apikey,
          "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
    } catch (error: any) {
      dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
    }
  };
};

export const fetchCategoryList = (categoryId: Number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST_CATEGORY_PRODUCT });
    try {
      const options = {
        method: "GET",
        url: "https://wayfair.p.rapidapi.com/products/list",
        params: {
          categoryId: categoryId,
          itemsPerPage: "15",
          page: "1",
        },
        headers: {
          "X-RapidAPI-Key":
            apikey,
          "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      dispatch({
        type: FETCH_DATA_SUCCESS_CATEGORY_PRODUCT,
        payload: response.data.response.data,
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_DATA_FAILURE_CATEGORY_PRODUCT,
        payload: error.message,
      });
    }
  };
};

export const fetchAllProducts= ()=>{

  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST_ALL_PRODUCT });
    try {
      const options = {
        method: 'GET',
        url: 'https://wayfair.p.rapidapi.com/products/list',
        params: {
          categoryId: '214970',
          itemsPerPage: '20',
          page: '2'
        },
        headers: {
          'X-RapidAPI-Key': apikey,
          'X-RapidAPI-Host': 'wayfair.p.rapidapi.com'
        }
      };

      const response = await axios.request(options);
      dispatch({
        type: FETCH_DATA_SUCCESS_ALL_PRODUCT,
        payload: response.data.response.data.category.browse.products,
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_DATA_FAILURE_ALL_PRODUCT,
        payload: error.message,
      });
    }
  };

}
