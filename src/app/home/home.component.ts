import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {ContactService} from "../services/contact.service";
import {API_WHATSAPP, Contact} from "../models/contact";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    contacts?: Contact[];
    isLoading: boolean = true;

    constructor(private contactService: ContactService) {
    }

    ngOnInit(): void {
        this.getContacts();
    }

    delete(id: number) {
        this.isLoading = true;
        this.contactService.destroy(id).pipe().subscribe((data) => {
            this.getContacts();
            this.isLoading = false;
        });
    }

    whastapp(phone: string) {
        window.open(API_WHATSAPP + phone, '_blank');
    }

    getContacts() {
        this.contactService.getContacts().pipe().subscribe(contacts => {
            this.contacts = contacts;
            this.isLoading = false;
        })
    }
}
