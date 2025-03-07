import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  imgURL = "https://github.com/user-attachments/assets/eccf9b76-5291-493b-a9be-b0ef482bbe92"
  url = "https://www.bridgelabz.com";
  userName : string = "";
  nameError : String = "";
  
  ngOnInit() : void{
    this.title = "Hello From BridgeLabz";
  }

  onClick($event: any){
    console.log("Save button is clicked", $event);
    window.open(this.url, "_blank");
  }

  onInput(event: Event): void {
    const regex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (regex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect";
  }
}



