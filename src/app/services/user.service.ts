import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of, tap} from 'rxjs';
import {Contact} from "../models/contact";

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(
        private http: HttpClient) {
    }
}
