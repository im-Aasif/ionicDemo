import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<any> {
    return this.http.get<any>('https://swapi.co/api/vehicles/4');
  }
}
