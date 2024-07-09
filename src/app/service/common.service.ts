import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class CommonService {
    constructor(private http: HttpClient) { }

    fetchUserData(): Observable<any> {
        return this.http.get('https://api.github.com/users/BasavarajHirur')
    }
}