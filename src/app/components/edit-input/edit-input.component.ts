import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Task } from '../lists/list';

@Component({
  selector: 'app-edit-input',
  templateUrl: './edit-input.component.html',
  styleUrls: ['./edit-input.component.css']
})
export class EditInputComponent implements OnInit {
  @Input() data: Task;
  @Output() changeEdit = new EventEmitter<Task>();
  constructor(private todoService: TodoService) { }

  editForm = new FormGroup({
    task: new FormControl(''),
  });

  private onSubmit(item: Task) {
    const { task }  = this.editForm.value;
    if (task.trim().length > 0 ) {
      this.todoService.editTask(item.id, task);
      this.changeEdit.emit(item);
    }
  }

  ngOnInit(): void {
  }
  private refineInput(event): boolean {
    return TodoService.replaceInput(event);
  }
}
