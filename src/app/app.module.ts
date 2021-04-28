import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';

import  firebase  from 'firebase';
import { FeedPage } from '../pages/feed/feed';











var firebaseConfig = {
  apiKey: "AIzaSyD9W9mudTQCwt6H5fN8hhKhySpNbpmYtUQ",
  authDomain: "socialmedia-3acac.firebaseapp.com",
  projectId: "socialmedia-3acac",
  storageBucket: "socialmedia-3acac.appspot.com",
  messagingSenderId: "311553114704",
  appId: "1:311553114704:web:133172b4ab351b7ffd8755"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.firestore().settings({
//   timestampsInSnapshots: true
// })

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignUpPage,
    FeedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignUpPage,
    FeedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,


    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
