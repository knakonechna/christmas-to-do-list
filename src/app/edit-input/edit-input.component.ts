import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TodoService} from '../services/todo.service';
import {Task} from '../lists/list';

@Component({
  selector: 'app-edit-input',
  templateUrl: './edit-input.component.html',
  styleUrls: ['./edit-input.component.css']
})
export class EditInputComponent implements OnInit {
  @Input() data: List;
  @Output() changeEdit = new EventEmitter<boolean>();
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    console.log(this);
  }

  private onChangeEdit(item: Task): void {
    this.changeEdit.emit(item);
  }
  private editTodo(id: string, text: string): void {
    this.todoService.editTask(id, text);
    this.changeEdit.emit();
  }

}
