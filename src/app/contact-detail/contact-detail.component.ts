import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../services/contact.service";
import {Location} from '@angular/common';
import {Contact} from "../models/contact";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  @Input() contact?: any;
  id = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getContact();
  }

  getContact(): void {
    this.contactService.getContact(this.id).subscribe({
      next: data => {
        this.contact = data;
      },
      error: err => {
        console.log(err)
        if (err.error) {
          this.contact = JSON.parse(err.error).message;
        } else {
          this.contact = "Error with status: " + err.status;
        }
      }
    });
  }

  save(){
    if (this.contact) {
      this.contactService.update(this.contact, this.id)
        .subscribe(() => this.goBack());
    }
  }
  goBack(): void {
    this.location.back();
  }
}

