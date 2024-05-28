import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-multi-server',
  templateUrl: './multi-server.component.html',
  styleUrl: './multi-server.component.css',
  // encapsulation: ViewEncapsulation.None // None , ShadowDom , Emulated
})
export class MultiServerComponent {

  serversDetails : {id:number,name:string}[] = [];
  addServer = (server : {id:number,name:string}) => {
    // this.newServer--;
    for(let tempServer of this.serversDetails){
      
      if(tempServer.id === server.id) return;
    }
    this.serversDetails.push(
      {
        id:server.id,
        name:server.name
      }
    );
  }
  removeServer = () => {
    // this.total_servers.pop();
    // this.newServer++;
  }


}
