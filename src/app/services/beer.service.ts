import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "./local-storage.service";

const baseUrl: string = 'http://api.punkapi.com/v2/';


@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient, private ls: LocalStorageService) { }

  public getAll(): Observable<any> {
    return this.http.get(`${baseUrl}beers/`);
  }

  public getById(id: number): Observable<any> {
    return this.http.get(`${baseUrl}beers/${id}`);
  }


  public setToFavoriteById(id: number): void {
    let lcItem: number[] = this.ls.get('beerFavorites');

    if (lcItem == null) {
      lcItem = [id];
      this.ls.set(lcItem);
    }
    else if (lcItem != null) {
      let contains: boolean = lcItem.includes(id);
      if (!contains) {
        lcItem.push(id);
      } else {
        lcItem = lcItem.filter(item => item !== id);
      }

      this.ls.set(lcItem);
    }
  }
}
