import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InitialDetailsState } from "./details.reducers";

const selectState = createFeatureSelector<InitialDetailsState>('restaurantDetails');

export const selectRestaurantDetails = createSelector(
    selectState,
    (state: InitialDetailsState) => state.restaurantDetails?.data?.cards?.[2]?.card?.card?.info
)

export const selectRestaurantOfferDetails = createSelector(
    selectState,
    (state: InitialDetailsState) => state.restaurantDetails?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle
)

export const selectRestaurantmenuCarousel = createSelector(
    selectState,
    (state: InitialDetailsState) => {
        return state.restaurantDetails?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (c: any) =>
                c?.card?.card?.['@type'] ===
                'type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel'
        );
    }
)

export const selectItemCategory = createSelector(
    selectState,
    (state: InitialDetailsState) => {
        return state.restaurantDetails?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (c: any) =>
                c?.card?.card?.['@type'] ===
                'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        );
    }
)

export const selectNestedItemCategory = createSelector(
    selectState,
    (state: InitialDetailsState) => {
        return state.restaurantDetails?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (c: any) =>
                c?.card?.card?.['@type'] ===
                'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'
        );
    }
)