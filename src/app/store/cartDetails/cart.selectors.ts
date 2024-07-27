import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InitialCartDetailsState } from "./cart.reducer";

const selectState = createFeatureSelector<InitialCartDetailsState>('cartDetails');

export const selectCartDetails = createSelector(
    selectState,
    (state: InitialCartDetailsState) => state.cartDetails
)

export const selectShowCart = createSelector(
    selectState,
    (state: InitialCartDetailsState) => state.show
)