import { Injectable } from '@angular/core';

import EVENTS_MOCK from './EVENTS_MOCK';
import { externalEvents } from './EXTERNAL_EVENTS_MOCK';
import { Subject } from "rxjs/Subject";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class KhachHangService {
  private url = `http://api_gd.libs.com.vn/v1/ef/LstCustomer`;

  constructor(private http: HttpClient) { }


  public search = () => {
    let urlSearch = `${this.url}/GetAll`
    return this.http.get(urlSearch)
      .toPromise()
      .catch(error => {
        return Promise.reject(error);
      });
  }

}
