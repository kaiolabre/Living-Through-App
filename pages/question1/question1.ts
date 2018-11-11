import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the Question1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question1',
  templateUrl: 'question1.html',
})
export class Question1Page {

  question01;
  result = {
    result : 0
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private modal:ModalController,
    private view:ViewController) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Question1Page');
  }

  openNextQuestion(){

    if(this.question01 === '1'){
      this.result = {
        result : 1
      };
    }

    let surveyResult = this.result;

    let question2 = this.modal.create('Question2Page', { result: surveyResult });

    
    question2.present();
    this.view.dismiss();
  }

}
