import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { failed_data, Get_data, Store_data } from "./common.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { CommonService } from "../service/common.service";

@Injectable()
export class CommonEffect {
    constructor(private actions$: Actions, private store: Store, private service: CommonService) { }

    public getData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(Store_data),
            switchMap(() => this.service.getData().pipe(
                map((data) => Get_data({ data })),
                catchError((error) => of(failed_data({ error })))
            )
            )
        )
    })
}