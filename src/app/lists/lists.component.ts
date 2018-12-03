import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Task } from './list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  constructor(private toDoService: TodoService) {}
  lists: Task[];
  selected: number;

  private getTask(): void {
    this.toDoService.saveTodoList(JSON.parse(localStorage.getItem('tasks')));
    this.lists = this.toDoService.tasksArray;
  }

  ngOnInit() {
    this.getTask();
  }

  private isAnyTaskSelected(): void {
    this.toDoService.isSelected();
    this.selected = this.toDoService.selectedList;
  }

  private onSelect(item: Task): void {
    this.toDoService.onSelect(item);
    this.lists = this.toDoService.tasksArray;
    this.isAnyTaskSelected();
  }

  private addTodo(item: string): void {
    this.toDoService.addTasks(item);
    this.lists = this.toDoService.tasksArray;
    this.isAnyTaskSelected();
  }
  private removeSelected(): void {
    this.toDoService.removeSelected();
    this.lists = this.toDoService.tasksArray;
    this.isAnyTaskSelected();
  }
  private changeEdit(item): void {
    this.toDoService.changeIsEdit(item);
    this.lists = this.toDoService.tasksArray;
  }
  private editTodo(id: string, text: string): void {
    this.toDoService.editTask(id, text);
    this.changeEdit(text);
  }
}
