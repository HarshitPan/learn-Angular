import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles: [`
        .smallID {
            border: solid 2px black;
            border-radius:20px;
        }
    `]
})
export class ServerComponent{
    @Output() newServerCreated = new EventEmitter<{id:any,name:string}>;
    
    onAdd(serverIdTemplate:HTMLInputElement,serverNameTemplate:HTMLInputElement){
        console.log("value " + serverIdTemplate.value);
        console.log("value 2 "+serverNameTemplate.value);
        // this.newServerCreated.emit({id:this.serverID,name:this.serverName});
        this.newServerCreated.emit({id:serverIdTemplate.value, name : serverNameTemplate.value});
    }
   
    // constructor(){
    //     this.serverID=Math.floor(Math.random()*100);
    //     // console.log(Math.floor(this.serverID) +" "+ this.serverID);
    //     this.serverName = 'server '+Math.floor(this.serverID);
    // }
    
    getColor = () => {
        return this.serverID>=50?['red','white']:['blue','cyan'];
    }
    serverID: number;
    serverName:string;
}