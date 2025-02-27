import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Events} from "./models/events-model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<Events> {
    return this.http.get<Events>(`/portfolio/json/events.json`);
  }
}
