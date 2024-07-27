import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { CommonService } from "src/app/service/common.service";


@Injectable()
export class CartDetailsEffect {
    constructor(private actions$: Actions, private store: Store, private service: CommonService) { }

}