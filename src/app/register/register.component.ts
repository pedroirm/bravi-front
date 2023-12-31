import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    form: any = {
        name: null,
        email: null,
        password: null
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(
        private authService: AuthService,
        private router: Router) {
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        const {name, email, password} = this.form;

        this.authService.register(name, email, password).subscribe({
            next: data => {
                this.router.navigate(['login'])
                this.isSuccessful = true;
                this.isSignUpFailed = false;
            },
            error: err => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
            }
        });
    }
}
