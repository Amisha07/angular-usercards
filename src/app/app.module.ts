import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserCardComponent } from './user-card/user-card.component';
import { GlobalState } from './global.state';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, ModalModule.forRoot() ],
  declarations: [ AppComponent, UserComponent, UserCardComponent ],
  providers: [ GlobalState ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
