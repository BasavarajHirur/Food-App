import { createReducer, on } from "@ngrx/store"
import { Get_User_data } from "./common.actions"

export interface InitialState {
    userData: null,
    error: null
}

export const initialState: InitialState = {
    userData: null,
    error: null
}

export const commonReducer = createReducer(
    initialState,
    on(
        Get_User_data,
        (state: InitialState, { userData }) => ({ ...state, userData, error: null })
    )
)