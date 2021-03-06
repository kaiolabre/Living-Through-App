import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Result2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result2',
  templateUrl: 'result2.html',
})
export class Result2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Result2Page');
  }

  closeModal(){
    this.view.dismiss();
  }

}
