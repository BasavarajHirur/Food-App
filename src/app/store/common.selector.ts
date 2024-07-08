import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InitialState } from "./common.reducers";

const selectState = createFeatureSelector<InitialState>('data');

export const selectData = createSelector(
    selectState,
    (state: InitialState) => state.data
)