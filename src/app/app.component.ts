import { Component, OnInit, ViewContainerRef } from "@angular/core";
import "rxjs";
import { Http } from "@angular/http";

import { GlobalState } from "./global.state";


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = "An Angular 9 Quick Start Cards";
  isShow:boolean = true;
  
    public constructor(
    private globalState: GlobalState,

  ) {

    this.globalState.subscribe("Header.title", (title) => {
      this.title = title;
    });
  }

}
