<<<<<<< HEAD
import {Component} from '@angular/core';
import {DataProvider} from "../../providers/data/data";
import {NavController} from "ionic-angular";
import {InfoPage} from "../info/info";
=======
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
>>>>>>> parent of 43d05b3... Homework 4 Upload

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showItem(item):void {
    this.navCtrl.push(InfoPage, item);
  }

}
