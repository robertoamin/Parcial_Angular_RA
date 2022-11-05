import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cafe } from './cafe';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private apiURL = environment.baseURL;

constructor(private http: HttpClient) { }

getCafes(): Observable<Cafe[]> {
  return this.http.get<Cafe[]>(this.apiURL);
}
}
