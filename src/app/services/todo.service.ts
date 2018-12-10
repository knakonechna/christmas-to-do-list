import { Injectable } from '@angular/core';
import { Task } from '../constants/list';
import { LocalStorageService } from './local-storage.service';
import { GetRandomIdService } from './get-random-id.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tasksArray: Task[];
  selectedList: number;
  constructor() { }

  /* to disable the ability to put a space in the blank line */
  static replaceInput(event): boolean {
    return !(event.target.value.trim().length === 0 && event.which === 32);
  }

  /* for getting the array of tasks */
  getTodoList(): void {
    this.tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  /* for save current list of tasks*/
  saveTodoList(item: Task[]) {
    LocalStorageService.saveToDoInLocalStorage(item);
    this.getTodoList();
  }

  /* set the isDone status for task
  returns lists of tasks that are selected */
  onSelect(item: Task): void {
    this.tasksArray[this.getTaskByID(item.id)].isDone = !item.isDone;
    this.saveTodoList(this.tasksArray);
  }

  /* check the quantity of selected tasks */
  isSelected(): void {
    this.selectedList = this.tasksArray.filter(item => item.isDone).length;
  }

  /* set or unset status is edit to the task*/
  changeIsEdit(item: Task): void {
    this.tasksArray[this.getTaskByID(item.id)].isEdit = !item.isEdit;
    this.saveTodoList(this.tasksArray);
  }

  /* add a new task to the list of tasks*/
  addTask(text: string) {
    this.tasksArray.push({
      id: GetRandomIdService.getID(),
      text: text,
      isDone: false,
      isEdit: false,
    });
    this.saveTodoList(this.tasksArray);
    this.getTodoList();
  }

  /* remove selected tasks from the list of tasks*/
  removeSelected() {
    this.tasksArray = this.tasksArray.filter(selectable => !selectable.isDone);
    this.saveTodoList(this.tasksArray);
  }

  /* edit task that we choose*/
  editTask(id: string, text: string) {
    this.tasksArray[this.getTaskByID(id)].text = text;
    this.saveTodoList(this.tasksArray);
  }

  /* return tasks by if from the list of tasks */
  getTaskByID(id: string): number {
    return this.tasksArray.findIndex(x => x.id === id);
  }
}
