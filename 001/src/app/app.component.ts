import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '001';


  changeTitle(){
    this.title = 'cambiado';
  }

  changeTitle2() {
    this.title = '001';
    }


}
