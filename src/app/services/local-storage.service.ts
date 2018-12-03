import { Injectable } from '@angular/core';
import {Task} from '../lists/list';
import {TASKS} from '../mock-files/mock-lists';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  public static saveToDoInLocalStorage(tasks: Task[]) {
    window.localStorage.setItem('tasks', JSON.stringify(tasks || TASKS));
  }
}
