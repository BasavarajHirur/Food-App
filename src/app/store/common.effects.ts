import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { failed_data, Get_Restaurant_data, Get_User_data, Store_Restaurant_data, Store_User_data } from "./common.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { CommonService } from "../service/common.service";

@Injectable()
export class CommonEffect {
    constructor(private actions$: Actions, private store: Store, private service: CommonService) { }

    public getData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(Store_User_data),
            switchMap(() => this.service.fetchUserData().pipe(
                map((userData) => Get_User_data({ userData })),
                catchError((error) => of(failed_data({ error })))
            )
            )
        )
    })

    public getRestaurantData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(Store_Restaurant_data),
            switchMap(() => this.service.fetchRestaurantData().pipe(
                map((RestaurantData) => Get_Restaurant_data({ RestaurantData })),
                catchError((error) => of(failed_data({ error })))
            )
            )
        )
    })
}