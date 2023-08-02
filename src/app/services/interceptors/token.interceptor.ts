import {Injectable} from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HTTP_INTERCEPTORS,
    HttpErrorResponse
} from '@angular/common/http';

import {StorageService} from "../storage.service";

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from "@angular/router";
import {Service} from "../../models/service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        private storageService: StorageService,
        private router: Router
    ) {
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        this.storageService.clean();
        this.router.navigate(['login']);
        return next.handle(request);
    }

    // @ts-ignore
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.storageService.getToken();
        const requestUrl: Array<any> = request.url.split('/');
        const apiUrl: Array<any> = Service.BASE_URL.split('/');
        if (token && requestUrl[2] === apiUrl[2]) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                    token: `${token}`
                }
            });
            return next.handle(request).pipe(
                catchError((error) => {
                    if (
                        error instanceof HttpErrorResponse &&
                        !request.url.includes('register') &&
                        error.status === 401
                    ) {

                        return this.handle401Error(request, next);
                    }
                    return throwError(() => error);
                })
            );
        }
    }
}

export const httpInterceptorProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
];


