import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TodoService} from '../services/todo.service';
import {Task} from '../lists/list';

@Component({
  selector: 'app-edit-input',
  templateUrl: './edit-input.component.html',
  styleUrls: ['./edit-input.component.css']
})
export class EditInputComponent implements OnInit {
  @Input() data: Task;
  @Output() changeEdit = new EventEmitter<Task>();
  constructor(private todoService: TodoService) { }

  private onChangeEdit(item: Task): void {
    this.changeEdit.emit(item);
  }
  private editTodo(item: Task, text: string): void {
    this.todoService.editTask(item.id, text);
    this.changeEdit.emit(item);
  }

  ngOnInit(): void {
  }
}
