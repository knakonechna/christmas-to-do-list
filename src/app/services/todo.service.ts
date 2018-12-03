import { Injectable } from '@angular/core';
import { List } from '../lists/list';
import {LocalStorageService} from './local-storage.service';
import {GetRandomIdService} from './get-random-id.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  listsArray: List[];
  constructor(private localStorageService: LocalStorageService) { }

    isNoSelected(): number {
      return this.listsArray.filter(item => item.isDone).length;
    }
    getTodoList(lists: List[]) {
       LocalStorageService.saveToDoInLocalStorage(lists);
       this.listsArray = lists;
    }
    addTasks(list: string) {
    this.listsArray.push({
      id: GetRandomIdService.getID(),
      text: list,
      isDone: false,
      isEdit: false,
    });
    this.getTodoList(this.listsArray);
    return this.listsArray;
  }
   removeSelected() {
    const newListOfTask = this.listsArray.filter(selectable => !selectable.isDone);
    this.getTodoList(newListOfTask);
    return newListOfTask;
  }
   editTask(id: string, list: string) {
    this.listsArray[this.getTaskByID(id)].text = list;
    this.getTodoList(this.listsArray);
  }
   getTaskByID(id: string): number {
    return this.listsArray.findIndex(x => x.id === id);
  }

  changeIsEdit(list: List): List[] {
    this.listsArray[this.getTaskByID(list.id)].isEdit = !list.isEdit;
    this.getTodoList(this.listsArray);
    return this.listsArray;
  }
}
