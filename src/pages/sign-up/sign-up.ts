import { Component } from '@angular/core';
import { NavController, NavParams ,ToastController,AlertController} from 'ionic-angular';
import firebase from 'firebase';
import { FeedPage } from '../feed/feed';



@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  name: string = "";
  email: string = "";
  password: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl:ToastController, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  signUp(){

    firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then((data)=>{
      console.log(data)
     let newUser:firebase.User=data;
     console.log(newUser)
     newUser.updateProfile({
       displayName:this.name,
       photoURL:""
     }).then(()=>{
       console.log()
    this.alertCtrl.create({
      title:"Account Created",
      message:"Your account has been created sucessfully.",
      buttons:[{
        text:"OK",
        handler:()=>{
          this.navCtrl.setRoot(FeedPage);
        }
      }]
    }).present();

     }).catch((err)=>{
       console.log(err)


     })

    }).catch((err)=>{

      console.log(err);
      this.toastCtrl.create({
        message:err.message,
        duration:3000
      }).present();

    })

  }

  goBack(){
this.navCtrl.pop();
  }

}
