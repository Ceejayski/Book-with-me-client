import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ComponentTitle = "i am Comp"
  clickhandler(){
    alert("I am Clicked")
  }
}
