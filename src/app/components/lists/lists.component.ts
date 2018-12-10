import {Component, SimpleChanges, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Task } from '../../constants/list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnChanges {
  constructor(private todoService: TodoService) {}
  @Input() tasksArray: Task[];
  @Input() isDashboard: boolean;
  @Input() isActiveTasks: boolean;
  @Output() updateTaskArray = new EventEmitter<string>();
  lists: Task[] = this.tasksArray;
  selected: number;

  ngOnChanges(changes: SimpleChanges) {
    this.lists = this.tasksArray;
    this.isAnyTaskSelected();
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

  private removeSelected(): void {
    this.todoService.removeSelected();
    this.lists = this.todoService.tasksArray;
    this.isAnyTaskSelected();
    this.updateTaskArray.emit();
  }

  private changeEdit(item): void {
    this.todoService.changeIsEdit(item);
    this.lists = this.todoService.tasksArray;
  }
  updateTasks() {
    this.updateTaskArray.emit();
    this.lists = this.todoService.tasksArray;
  }
}
