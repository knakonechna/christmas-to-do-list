import { Injectable } from '@angular/core';
import { Task } from '../constants/list';
import { TASKS } from '../mocks/mock-lists';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  public static saveToDoInLocalStorage(tasks: Task[]) {
    window.localStorage.setItem('tasks', JSON.stringify(tasks || TASKS));
  }
}
