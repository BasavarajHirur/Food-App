import { createAction, props } from "@ngrx/store";

const SET_CART_ITEM = '[common action] set cart item';
const REMOVE_CART_ITEM = '[common action] remove cart item';
const REMOVE_SINGLE_CART_ITEM = '[common action] remove single cart item';
const GET_CART_DETAILS = '[common effects] get cart details';
const SHOW_CART = '[common action] show cart';
const CLEAR_CART = '[common action] clear cart';

const FAILED_CART_DETAILS = '[common effects] get failed cart details'

export const Add_Item_To_Cart = createAction(
    SET_CART_ITEM,
    props<{ item: any }>()
)

export const Remove_Item_From_Cart = createAction(
    REMOVE_CART_ITEM,
    props<{ RemoveItem: any }>()
)

export const Remove_Single_Item_From_Cart = createAction(
    REMOVE_SINGLE_CART_ITEM,
    props<{ item: any }>()
)

export const Get_Cart_Details = createAction(
    GET_CART_DETAILS,
    props<{ cartDetails: any }>()
)

export const Show_cart = createAction(
    SHOW_CART
)

export const Clear_cart = createAction(
    CLEAR_CART
)

export const failedCartDetails = createAction(
    FAILED_CART_DETAILS,
    props<{ error: any }>()
)