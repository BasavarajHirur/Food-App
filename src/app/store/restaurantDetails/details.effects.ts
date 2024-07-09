import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { failedDetails, Get_Restaurant_Details, Set_Restaurant_Id } from "./details.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { CommonService } from "src/app/service/common.service";


@Injectable()
export class RestaurantDetailsEffect {
    constructor(private actions$: Actions, private store: Store, private service: CommonService) { }

    public getRestaurantDetails$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(Set_Restaurant_Id),
            switchMap((res) => this.service.fetchRestaurantMenuDetails(res.Id).pipe(
                map((restaurantDetails) => Get_Restaurant_Details({ restaurantDetails })),
                catchError((error) => of(failedDetails({ error })))
            )
            )
        )
    })
}