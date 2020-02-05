import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Hello Angular!';
  show: boolean;
  toggleComponent: boolean = true;

  change(): void {
    this.title = 'My new title!';
    this.show = !this.show;
  }
}
