import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { MultiServerComponent } from './multi-server/multi-server.component';
import { AssignmentComponentComponent } from './assignment-component/assignment-component.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { Mod2LastComponent } from './mod2-last/mod2-last.component';
import { DispServerComponent } from './disp-server/disp-server.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    MultiServerComponent,
    AssignmentComponentComponent,
    DataBindingComponent,
    Mod2LastComponent,
    DispServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
