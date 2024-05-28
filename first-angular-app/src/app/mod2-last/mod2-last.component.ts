import { Component } from '@angular/core';

@Component({
  selector: 'app-mod2-last',
  templateUrl: './mod2-last.component.html',
  styleUrl: './mod2-last.component.css'
})
export class Mod2LastComponent {
  disp='block';
  val=0;
  arr=[];
  changeDisp(){
    if(this.disp==='none'){
      this.disp='block';
    }
    else {
      this.disp='none';
    }
    this.val++;
    this.arr.push(new Date());
    // console.log(this.arr);
  }
}
