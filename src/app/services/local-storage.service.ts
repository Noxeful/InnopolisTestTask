import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public get(token: string) {
    return JSON.parse(localStorage.getItem(token));
  }

  public set(item): void {
    localStorage.setItem('beerFavorites', JSON.stringify(item));
  }
}
