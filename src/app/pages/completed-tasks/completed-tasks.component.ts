import { Component, OnInit } from '@angular/core';
import {Task} from '../../constants/list';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {
  completedTasks: Task[];
  constructor( private todoService: TodoService) { }

  ngOnInit() {
    this.getCompletedTasks();
  }
  getCompletedTasks(): void {
    this.todoService.saveTodoList(JSON.parse(localStorage.getItem('tasks')));
    if (this.todoService.tasksArray) {
      this.completedTasks = this.todoService.tasksArray.filter(task => task.isDone);
    }
  }
}
