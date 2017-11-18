import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {User} from './models/user';
import 'rxjs/add/operator/map';

@Injectable()
export class MyAppServiceService {

  baseUrl = 'http://localhost:3000/api/';
  constructor(private http: Http) {
  }

  create(form) {
    console.log(form);
    return this.http.post('/api/addusers/', form).map(res => res.json());
  }

  private jwt() {
    // create authorization header with jwt token
   /* const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
      return new RequestOptions({headers: headers});
    }*/

  }
}
