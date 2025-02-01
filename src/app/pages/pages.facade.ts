import {Injectable} from "@angular/core";
import {HomeService} from "./home/home.service";
import {Observable} from "rxjs";
import {Events} from "./home/models/events-model";

@Injectable({
  providedIn: 'root'
})
export class PagesFacade {
  constructor(private homeService: HomeService) {
  }

  public getEventsData(): Observable<Events> {
    return this.homeService.getEvents();
  }
}
