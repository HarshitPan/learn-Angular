import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-disp-server',
  templateUrl: './disp-server.component.html',
  styleUrl: './disp-server.component.css'
})
export class DispServerComponent {
  @Input('aliasElement') element:{id:number,name:string}={id:null,name:null};
}
