import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  public todo: Todo = {
    name: '',
    isDone: false,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
