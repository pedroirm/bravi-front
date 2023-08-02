import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../models/contact";
import {Service} from "../models/service";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient) {
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(Service.GET_CONTACTS);
  }

  getContact(id: number): Observable<Contact[]> {
    return this.http.get<Contact[]>(Service.GET_CONTACT + id)
  }

  store(name: string, email: string, phone: string): Observable<any> {
    return this.http.post(
      Service.CREATE_CONTACT,
      {
        name,
        email,
        phone,
      }
    );
  }

  update(contact: Contact, id: number) {
    return this.http.put<Contact[]>(Service.UPDATE_CONTACT + id, contact);
  }

  destroy(id: number) {
    return this.http.delete<Contact[]>(Service.DELETE_CONTACT + id);
  }


}
