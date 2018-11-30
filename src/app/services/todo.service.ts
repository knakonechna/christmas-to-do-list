import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { List } from '../lists/list';
import {LISTS} from '../lists/mock-lists';
import {LocalStorageService} from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private localStorageService: LocalStorageService) { }

  static getTodoList(lists: List[]) {
     LocalStorageService.saveToDoInLocalStorage(lists);
  }
  static addTasks(list: string, lists: List[]) {
    lists.push({
     text: list,
     isDone: false,
    });
    this.getTodoList(lists);
    return lists;
  }
  static removeSelected(lists: List[]) {
    const newListOfTask = lists.filter(selectable => !selectable.isDone);
    this.getTodoList(newListOfTask);
    return newListOfTask;
  }
}
