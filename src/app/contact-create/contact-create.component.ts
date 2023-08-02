import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ContactService} from "../services/contact.service";
import {Location} from "@angular/common";

@Component({
    selector: 'app-contact-create',
    templateUrl: './contact-create.component.html',
    styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
    form: any = {
        name: null,
        email: null,
        phone: null
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(
        private route: ActivatedRoute,
        private contactService: ContactService,
        private location: Location,
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        const {name, email, phone} = this.form;
        this.contactService.store(name, email, phone).pipe().subscribe(data => {
            if (data.status == 'success') {
                this.router.navigate(['']);
            } else {
                console.log(data.message)
            }
        })


    }
}
