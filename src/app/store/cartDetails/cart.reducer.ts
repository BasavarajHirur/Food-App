import { createReducer, on } from "@ngrx/store"
import { Add_Item_To_Cart, Clear_cart, Get_Cart_Details, Remove_Item_From_Cart, Remove_Single_Item_From_Cart, Show_cart } from "./cart.actions"

export interface InitialCartDetailsState {
    cartDetails: any[],
    show: boolean,
    error: any
}

export const initialState: InitialCartDetailsState = {
    cartDetails: [],
    show: false,
    error: null
}

export const CartDetailsReducer = createReducer(
    initialState,
    on(
        Add_Item_To_Cart,
        (state: InitialCartDetailsState, { item }) => {
            const cart = JSON.parse(JSON.stringify(state.cartDetails));
            const isExisting = cart.find(
                (existingItem: any) => existingItem?.card?.info?.id === item.card.info.id
            );

            if (isExisting) {
                isExisting.quantity += 1;
            } else {
                cart.push({
                    ...item,
                    quantity: 1,
                });
            }

            return { ...state, cartDetails: cart, error: null }
        }
    ),
    on(
        Remove_Item_From_Cart,
        (state: InitialCartDetailsState, { RemoveItem }) => {
            let cart = JSON.parse(JSON.stringify(state.cartDetails));
            const isExisting = cart.find(
                (existingItem: any) => existingItem?.card?.info?.id === RemoveItem.card.info.id
            );

            if (isExisting) {
                cart = cart.filter(
                    (item: any) => item.card.info.id !== RemoveItem.card.info.id
                );
            }

            return { ...state, cartDetails: cart, error: null }
        }
    ),
    on(
        Remove_Single_Item_From_Cart,
        (state: InitialCartDetailsState, { item }) => {
            let cart = JSON.parse(JSON.stringify(state.cartDetails));
            const isExisting = cart.find(
                (existingItem: any) => existingItem?.card?.info?.id === item.card.info.id
            );

            if (isExisting) {
                if (isExisting.quantity > 1) {
                    isExisting.quantity -= 1;
                } else {
                    cart = cart.filter(
                        (cartItem: any) => cartItem.card.info.id !== item.card.info.id
                    );
                }
            }

            return { ...state, cartDetails: cart, error: null }
        }
    ),
    on(
        Get_Cart_Details,
        (state: InitialCartDetailsState, { cartDetails }) => ({ ...state, cartDetails, error: null })
    ),
    on(
        Show_cart,
        (state: InitialCartDetailsState) => {
            const show = !state.show;
            return ({ ...state, show, error: null })
        }
    ),
    on(
        Clear_cart,
        (state: InitialCartDetailsState) => {
            const cart: any[] = [];
            return ({ ...state, cartDetails: cart, error: null })
        }
    ),
)