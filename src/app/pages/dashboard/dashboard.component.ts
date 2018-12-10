import { Component, OnInit } from '@angular/core';
import {Task} from '../../constants/list';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  allTasks: Task[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getAllTask();
  }

  getAllTask(): void {
    this.todoService.saveTodoList(JSON.parse(localStorage.getItem('tasks')));
    if (this.todoService.tasksArray) {
      this.allTasks = this.todoService.tasksArray;
    }
  }

}
