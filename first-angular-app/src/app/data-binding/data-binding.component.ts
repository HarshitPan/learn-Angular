import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  username:string = "";
  empty:boolean = true;

  check = () => {
    if(this.username != "") this.empty=false;
    else this.empty=true;
  }
  reset = () => {
    console.log("hello");
    this.username = "";
    this.empty=true;
  }
}
