import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello-button',
  templateUrl: './hello-button.component.html',
  styleUrls: ['./hello-button.component.scss']
})
export class HelloButtonComponent implements OnInit {
  @Input() name: string;
  @Output() hello = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    this.hello.emit(`Hello ${this.name}`)
  }

}
