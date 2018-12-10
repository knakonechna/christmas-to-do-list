import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Task} from '../../constants/list';

@Component({
  selector: 'app-active-tasks',
  templateUrl: './active-tasks.component.html',
  styleUrls: ['./active-tasks.component.css']
})

export class ActiveTasksComponent implements OnInit {
  activeTasks: Task[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getActiveTasks();
  }

  getActiveTasks(): void {
    this.todoService.saveTodoList(JSON.parse(localStorage.getItem('tasks')));
    if (this.todoService.tasksArray) {
      this.activeTasks = this.todoService.tasksArray.filter(task => !task.isDone);
    }
  }
}
