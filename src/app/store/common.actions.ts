import { createAction, props } from "@ngrx/store";

const STORE_USER_DATA = '[common action] store user data';
const GET_USER_DATA = '[common effects] get user data';
const ERROR_DATA = '[common effects] get error data';

const GET_RES_DATA = '[common action] get restaurant data';
const STORE_RES_DATA = '[common effects] store restaurant data';

const GET_MENU_DATA = '[common effects] get menu data';
const GET_TOP_RATED_REST_DATA = '[common effects] get top rated restaturant menu data';
const TOP_RATED_RESTAURANTS = '[common effects] get top rated restaturants';
const FILTER_TOP_RATED_RESTAURANTS = '[common effects] get filtered top rated restaturants';

export const Store_User_data = createAction(
    STORE_USER_DATA
)

export const Get_User_data = createAction(
    GET_USER_DATA,
    props<{ userData: any }>()
)

export const failed_data = createAction(
    ERROR_DATA,
    props<{ error: any }>()
)

//Restaurant Data

export const Store_Restaurant_data = createAction(
    GET_RES_DATA
)

export const Get_Restaurant_data = createAction(
    STORE_RES_DATA,
    props<{ RestaurantData: any }>()
)

export const Get_Menu_Card = createAction(
    GET_MENU_DATA,
    props<{ MenuCard: any }>()
)

export const Get_Top_Rated_Rest_Data = createAction(
    GET_TOP_RATED_REST_DATA,
    props<{ TopRatedRestData: any }>()
)

export const Top_rated_restaurant = createAction(
    TOP_RATED_RESTAURANTS
)

export const Filter_Top_rated_restaurant = createAction(
    FILTER_TOP_RATED_RESTAURANTS,
    props<{ filteredValue: any }>()
)