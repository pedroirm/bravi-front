import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Service} from "../models/service";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {
    }

    login(email: string, password: string): Observable<any> {
        return this.http.post(
            Service.AUTH_LOGIN,
            {
                email,
                password,
            }
        );
    }

    register(name: string, email: string, password: string): Observable<any> {
        return this.http.post(
            Service.AUTH_REGISTER,
            {
                name,
                email,
                password,
            }
        );
    }

    logout(): Observable<any> {
        return this.http.post(Service.AUTH_LOGOUT, {});
    }
}
