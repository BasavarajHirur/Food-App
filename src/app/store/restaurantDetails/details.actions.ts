import { createAction, props } from "@ngrx/store";

const SET_REST_ID = '[common action] get restaurant Id';
const GET_REST_DETAILS = '[common effects] get restaurant details';

const FAILED_DETAILS = '[common effects] get failed details'

export const Set_Restaurant_Id = createAction(
    SET_REST_ID,
    props<{ Id: string }>()
)

export const Get_Restaurant_Details = createAction(
    GET_REST_DETAILS,
    props<{ restaurantDetails: any }>()
)

export const failedDetails = createAction(
    FAILED_DETAILS,
    props<{ error: any }>()
)