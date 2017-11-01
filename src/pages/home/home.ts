import {Component} from '@angular/core';
import {DataProvider} from "../../providers/data/data";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lists: {};

  constructor(public navCtrl:NavController, public dataService:DataProvider) {

  }
  ionViewDidLoad() {
    this.lists = this.dataService.myData;
  };

}

