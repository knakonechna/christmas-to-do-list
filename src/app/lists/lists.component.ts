import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { List } from './list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  constructor(private toDoService: TodoService) { }
  list: List = {
    text: 'Buy presents',
    isDone: false,
  };
  lists: List[];
  selectedList: number;

  getTask(): void {
    TodoService.getTodoList(JSON.parse(localStorage.getItem('lists')));
    this.lists = JSON.parse(localStorage.getItem('lists'));
  }

  ngOnInit() {
    this.getTask();
  }
  isNoSelected(): void {
    this.selectedList = this.lists.filter(item => item.isDone).length;
  }
  onSelect(list: List): void {
    list.isDone = !list.isDone;
    this.isNoSelected();
  }
  addTodo(list: string): void {
    this.lists = TodoService.addTasks(list, this.lists);
    this.isNoSelected();
  }
  removeSelected(): void {
    this.lists = TodoService.removeSelected(this.lists);
    this.isNoSelected();
  }
}
