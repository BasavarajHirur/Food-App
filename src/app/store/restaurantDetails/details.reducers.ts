import { createReducer, on } from "@ngrx/store"
import { Get_Restaurant_Details } from "./details.actions"

export interface InitialDetailsState {
    restaurantDetails: any,
    error: any
}

export const initialState: InitialDetailsState = {
    restaurantDetails: null,
    error: null
}

export const RestaurantDetailsReducer = createReducer(
    initialState,
    on(
        Get_Restaurant_Details,
        (state: InitialDetailsState, { restaurantDetails }) => ({ ...state, restaurantDetails, error: null })
    ),
)