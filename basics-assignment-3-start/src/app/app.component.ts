import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isParagraphVisible: boolean = false;
  arr: Date[] = [];

  constructor() {
    this.isParagraphVisible = false;
    this.arr = [];
  }

  setParagraphVisibility() {
    this.isParagraphVisible ? this.isParagraphVisible = false : this.isParagraphVisible = true;
    this.arr.push(new Date());
  }
}
