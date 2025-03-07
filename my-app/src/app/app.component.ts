import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  imgURL = "https://github.com/user-attachments/assets/eccf9b76-5291-493b-a9be-b0ef482bbe92"
  url = "https://www.bridgelabz.com";

  ngOnInit() : void{
    this.title = "Hello From BridgeLabz";
  }

  onClick($event: any){
    console.log("Save button is clicked", $event);
    window.open(this.url, "_blank");
  }
}

