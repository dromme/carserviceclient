import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  public API = '//thawing-chamber-47973.herokuapp.com';
  public OWNER_API = this.API + '/owners';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.OWNER_API);
  }

  get(id: string) {
    return this.http.get(this.OWNER_API + '/' + id);
  }

  save(car: any): Observable<any> {
    let result: Observable<Object>;
    if (car.href) {
      result = this.http.put(car.href, car);
    } else {
      result = this.http.post(this.OWNER_API, car);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
