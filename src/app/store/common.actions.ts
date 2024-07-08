import { createAction, props } from "@ngrx/store";

const STORE_DATA = '[common action] store data';
const GET_DATA = '[common effects] get data';
const ERROR_DATA = '[common effects] get error data';

export const Store_data = createAction(
    STORE_DATA,
    props<{ data: any }>()
)

export const Get_data = createAction(
    GET_DATA,
    props<{ data: any }>()
)

export const failed_data = createAction(
    ERROR_DATA,
    props<{ error: any }>()
)