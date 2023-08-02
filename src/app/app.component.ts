import {Component, OnInit} from '@angular/core';
import {StorageService} from './services/storage.service';
import {AuthService} from './services/auth.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    isLoggedIn = false;
    username?: string;

    constructor(
        private storageService: StorageService,
        private authService: AuthService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.isLoggedIn = this.storageService.isLoggedIn();
        if (this.isLoggedIn) {
            const user = this.storageService.getUser();
            this.username = user.user.name;
        }
    }

    logout(): void {
        this.authService.logout().subscribe({
            next: res => {
                console.log(res);
                this.storageService.clean();
                this.isLoggedIn = false;
                this.router.navigate(['/login']);
            },
            error: err => {
                console.log(err);
            }
        });
    }
}
