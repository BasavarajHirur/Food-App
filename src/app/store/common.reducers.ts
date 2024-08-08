import { createReducer, on } from "@ngrx/store"
import { Filter_Top_rated_restaurant, Get_Restaurant_data, Get_User_data, Handle_Login, Set_Login_Details, Top_rated_restaurant } from "./common.actions"

export interface InitialState {
    userData: any,
    RestaurantData: any,
    topRestaurants: any,
    filteredRestaurants: any,
    logInFormStatus: boolean,
    isLoggedIn: boolean,
    error: any
}

export const initialState: InitialState = {
    userData: null,
    RestaurantData: null,
    topRestaurants: null,
    filteredRestaurants: null,
    logInFormStatus: false,
    isLoggedIn: false,
    error: null
}

export const commonReducer = createReducer(
    initialState,
    on(
        Get_User_data,
        (state: InitialState, { userData }) => ({ ...state, userData, error: null })
    ),
    on(
        Get_Restaurant_data,
        (state: InitialState, { RestaurantData }) => (
            {
                ...state,
                RestaurantData,
                topRestaurants: RestaurantData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
                filteredRestaurants: RestaurantData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
                error: null
            })
    ),
    on(
        Top_rated_restaurant,
        (state) => {
            const filteredResto = state.topRestaurants?.filter(
                (list: any) => list?.info?.avgRating > 4.2 || list?.info?.avgRatingString > 4.2
            );

            return {
                ...state,
                filteredRestaurants: filteredResto,
                error: null
            }
        }
    ),
    on(
        Filter_Top_rated_restaurant,
        (state, { filteredValue }) => {
            const search = state.topRestaurants?.filter((res: any) =>
                res?.info?.name?.toLowerCase().includes(filteredValue.toLowerCase().trim())
            );

            return {
                ...state,
                filteredRestaurants: filteredValue ? search : state.topRestaurants,
                error: null
            }
        }
    ),
    on(
        Handle_Login,
        (state, { isOpen }) => ({ ...state, logInFormStatus: isOpen, error: null })
    ),
    on(
        Set_Login_Details,
        (state, { user_details }) => ({ ...state, isLoggedIn: true, error: null })
    )
)