import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { List } from './list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  constructor(private toDoService: TodoService) {}
  lists: List[];
  selectedList: number;

  getTask(): void {
    this.toDoService.getTodoList(JSON.parse(localStorage.getItem('lists')));
    this.lists = JSON.parse(localStorage.getItem('lists'));
  }

  ngOnInit() {
    this.getTask();
  }

  isNoSelected(): void {
    this.selectedList = this.toDoService.isNoSelected();
  }
  onSelect(list: List): void {
    list.isDone = !list.isDone;
    this.isNoSelected();
  }
  addTodo(list: string): void {
    this.lists = this.toDoService.addTasks(list);
    this.isNoSelected();
  }
  removeSelected(): void {
    this.lists = this.toDoService.removeSelected();
    this.isNoSelected();
  }
  changeEdit(list): void {
    this.lists = this.toDoService.changeIsEdit(list);
  }
  editTodo(id: string, list: string): void {
    this.toDoService.editTask(id, list);
    this.changeEdit(list);
  }
}
