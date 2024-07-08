import { createReducer, on } from "@ngrx/store"
import { Get_data } from "./common.actions"

export interface InitialState {
    data: null,
    error: null
}

export const initialState: InitialState = {
    data: null,
    error: null
}

export const commonReducer = createReducer(
    initialState,
    on(
        Get_data,
        (state: InitialState, { data }) => ({ ...state, data, error: null })
    )
)