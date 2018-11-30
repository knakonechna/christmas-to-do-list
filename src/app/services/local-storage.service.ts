import { Injectable } from '@angular/core';
import {List} from '../lists/list';
import {LISTS} from '../lists/mock-lists';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  static saveToDoInLocalStorage(lists: List[]) {
    window.localStorage.setItem('lists', JSON.stringify(lists || LISTS));
  }
}
