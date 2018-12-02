import { Injectable } from '@angular/core';
import { List } from '../lists/list';
import {LocalStorageService} from './local-storage.service';
import {GetRandomIdService} from './get-random-id.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private localStorageService: LocalStorageService) { }
    getTodoList(lists: List[]) {
       LocalStorageService.saveToDoInLocalStorage(lists);
    }
    addTasks(list: string, lists: List[]) {
    lists.push({
      id: GetRandomIdService.getID(),
      text: list,
      isDone: false,
      isEdit: false,
    });
    this.getTodoList(lists);
    return lists;
  }
   removeSelected(lists: List[]) {
    const newListOfTask = lists.filter(selectable => !selectable.isDone);
    this.getTodoList(newListOfTask);
    return newListOfTask;
  }
   editTask(id: string, list: string, listsArray: List[]) {
    listsArray[this.getTaskByID(id, listsArray)].text = list;
    this.getTodoList(listsArray);
  }
   getTaskByID(id: string, lists: List[]): number {
    return lists.findIndex(x => x.id === id);
  }

  changeIsEdit(list: List, listsArray: List[]): void {
    list.isEdit = !list.isEdit;
    this.getTodoList(listsArray);
  }
}
