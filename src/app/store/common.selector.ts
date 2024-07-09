import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InitialState } from "./common.reducers";

const selectState = createFeatureSelector<InitialState>('data');

export const selectUserData = createSelector(
    selectState,
    (state: InitialState) => state.userData
)

export const selectMenuCardData = createSelector(
    selectState,
    (state: InitialState) => state.RestaurantData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
)

export const selectTopRatedRestData = createSelector(
    selectState,
    (state: InitialState) => state.RestaurantData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
)

export const selectListOfResto = createSelector(
    selectState,
    (state: InitialState) => state?.filteredRestaurants
)