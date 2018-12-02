import { Injectable } from '@angular/core';
import { List } from '../lists/list';
import {LocalStorageService} from './local-storage.service';
import {GetRandomIdService} from './get-random-id.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private localStorageService: LocalStorageService, getRandomIdService: GetRandomIdService) { }

  static getTodoList(lists: List[]) {
     LocalStorageService.saveToDoInLocalStorage(lists);
  }
  static addTasks(list: string, lists: List[]) {
    lists.push({
      id: GetRandomIdService.getID(),
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
