import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmailProvider } from '../../providers/email/email';

/**
 * Generated class for the SafetyplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-safetyplan',
  templateUrl: 'safetyplan.html',
})
export class SafetyplanPage {

   /**
    * @public
    * Property to assign a FormGroup object to
    */

  //public form  : FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    //private _FORM	    : FormBuilder,
    //private _EMAIL       : EmailProvider
    ) {
/*
      // Create a FormGroup object to implement validation
      // on the template fields
      // VERY basic validation as you can see - I.e. NO empty fields!
      this.form = this._FORM.group({
        "to"            : ["", Validators.required],
        "cc"            : ["", Validators.required],
        "bcc"           : ["", Validators.required],
        "subject"       : ["", Validators.required],
        "message"       : ["", Validators.required]
     });*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SafetyplanPage');
  }/*

  sendMessage() : void
   {
      // Retrieve the validated form fields
      let to 	    	: string		= this.form.controls["to"].value,
          cc 		    : string		= this.form.controls["cc"].value,
          bcc 	  	: string		= this.form.controls["cc"].value,
          subject 	: string		= this.form.controls["subject"].value,
          message 	: string		= this.form.controls["message"].value;
          
          this._EMAIL.sendEmail(to, cc, bcc, subject, message);
   }*/
}
