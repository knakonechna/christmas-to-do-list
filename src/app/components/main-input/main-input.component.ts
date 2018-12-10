import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, Input} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Task} from '../../constants/list';

@Component({
  selector: 'app-main-input',
  templateUrl: './main-input.component.html',
  styleUrls: ['./main-input.component.css']
})

export class MainInputComponent implements OnInit, OnChanges {
  @Input() tasksArray: Task[];
  @Input() isDashboard: boolean;
  @Input() isActiveTasks: boolean;
  @Output() updateTaskArray = new EventEmitter<string>();
  tasks: Task[] = this.tasksArray;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTask();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tasks = this.todoService.tasksArray;
  }

  private getTask(): void {
    this.todoService.saveTodoList(JSON.parse(localStorage.getItem('tasks')));
    this.tasks = this.todoService.tasksArray;
  }

  private addTodo(item: string): void {
    this.todoService.addTask(item);
    this.updateTaskArray.emit();
    this.tasks = this.todoService.tasksArray;
  }
  private refineInput(event): boolean {
    return TodoService.replaceInput(event);
  }
}
