import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MAIN_API_URL, RESTAURANTS_MENU_DETAILS_URL, USER_URL } from "../contants/api-url";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class CommonService {
    constructor(private http: HttpClient) { }

    fetchUserData(): Observable<any> {
        return this.http.get(USER_URL)
    }

    fetchRestaurantData(): Observable<any> {
        return this.http.get(MAIN_API_URL);
    }

    fetchRestaurantMenuDetails(resId: string): Observable<any> {
        return this.http.get(RESTAURANTS_MENU_DETAILS_URL + resId);
    }
}