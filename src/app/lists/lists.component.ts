import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Task } from './list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  lists: Task[];
  selected: number;

  private getTask(): void {
    this.todoService.saveTodoList(JSON.parse(localStorage.getItem('tasks')));
    this.lists = this.todoService.tasksArray;
    this.isAnyTaskSelected();
  }

  ngOnInit() {
    this.getTask();
  }

  private isAnyTaskSelected(): void {
    this.todoService.isSelected();
    this.selected = this.todoService.selectedList;
  }

  private onSelect(item: Task): void {
    this.todoService.onSelect(item);
    this.lists = this.todoService.tasksArray;
    this.isAnyTaskSelected();
  }

  private addTodo(item: string): void {
    if (item.trim().length > 0 ) {
      this.todoService.addTasks(item);
      this.lists = this.todoService.tasksArray;
      this.isAnyTaskSelected();
    }
  }

  private removeSelected(): void {
    this.todoService.removeSelected();
    this.lists = this.todoService.tasksArray;
    this.isAnyTaskSelected();
  }

  private changeEdit(item): void {
    this.todoService.changeIsEdit(item);
    this.lists = this.todoService.tasksArray;
  }

  private refineInput(event): boolean {
    return TodoService.replaceInput(event);
  }
}
