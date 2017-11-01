import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
 Generated class for the DataProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class DataProvider {

  myData = [
    {
      ListTitle: "Meat",
      ListItems: [
        {itemName: "Chicken"},
        {itemName: "Pork"},
        {itemName: "Beef"}
      ]
    }
  ];


  constructor() {
    console.log('Hello DataProvider Provider');
  }

}