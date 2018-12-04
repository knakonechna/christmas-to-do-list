import { Injectable } from '@angular/core';
import { Task } from '../components/lists/list';
import { LocalStorageService } from './local-storage.service';
import { GetRandomIdService } from './get-random-id.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tasksArray: Task[];
  selectedList: number;
  constructor() { }

  static replaceInput(event): boolean {
    return !(event.target.value.trim().length === 0 && event.which === 32);
  }
  getTodoList(): void {
    this.tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
  }
  saveTodoList(item: Task[]) {
    LocalStorageService.saveToDoInLocalStorage(item);
    this.getTodoList();
  }
  onSelect(item: Task): void {
    this.tasksArray[this.getTaskByID(item.id)].isDone = !item.isDone;
  }
  isSelected(): void {
    this.selectedList = this.tasksArray.filter(item => item.isDone).length;
  }
  changeIsEdit(item: Task): void {
    this.tasksArray[this.getTaskByID(item.id)].isEdit = !item.isEdit;
    this.saveTodoList(this.tasksArray);
  }
  addTasks(text: string) {
    this.tasksArray.push({
      id: GetRandomIdService.getID(),
      text: text,
      isDone: false,
      isEdit: false,
    });
    this.saveTodoList(this.tasksArray);
  }
  removeSelected() {
    this.tasksArray = this.tasksArray.filter(selectable => !selectable.isDone);
    this.saveTodoList(this.tasksArray);
  }
  editTask(id: string, text: string) {
    this.tasksArray[this.getTaskByID(id)].text = text;
    this.saveTodoList(this.tasksArray);
  }
  getTaskByID(id: string): number {
    return this.tasksArray.findIndex(x => x.id === id);
  }
}
