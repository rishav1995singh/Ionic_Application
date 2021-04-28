webpackJsonp([0],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_feed__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.email = "";
        this.password = "";
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().signInWithEmailAndPassword(this.email, this.password).then(function (user) {
            console.log(user);
            _this.toastCtrl.create({
                message: "Welcome " + user.displayName,
                duration: 3000
            }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__feed_feed__["a" /* FeedPage */]);
        }).catch(function (err) {
            console.log(err);
            _this.toastCtrl.create({
                message: err.message,
                duration: 3000
            }).present();
        });
    };
    LoginPage.prototype.gotoSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Rishav\Development\Social_Media_Ionic_App\socialMedia\src\pages\login\login.html"*/'<ion-header hidden>\n  <ion-navbar color="danger">\n    <ion-title>\n      Social Media\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-item text-center no-lines>\n  <ion-icon name="logo-rss" class="logo" color="light">\n\n  </ion-icon>\n</ion-item>\n\n<ion-item text-center no-lines>\n  <h1>\n    Social Media\n  </h1>\n\n  <h6>\n    An app for continous Post\n  </h6>\n\n</ion-item>\n\n<ion-grid style="width: 75%;">\n  <ion-row class="rowStyle">\n    <ion-icon name="mail" color="danger"></ion-icon>\n    <ion-input type="email" placeholder="your email" [(ngModel)]="email"></ion-input>\n\n  </ion-row>\n\n  <ion-row class="rowStyle">\n    <ion-icon name="key" color="danger"></ion-icon>\n    <ion-input type="password" placeholder="your password" [(ngModel)]="password"></ion-input>\n\n  </ion-row>\n\n  <ion-row>\n    <button ion-button block round outline color="light" style="margin-top: 20px;" (click)="login()">\n      Login\n    </button>\n  </ion-row>\n\n</ion-grid>\n\n<button ion-button block clear color="light" (click)="gotoSignUp()">\n\n  Don\'t have an account? Sign Up\n\n</button>\n</ion-content>\n'/*ion-inline-end:"C:\Rishav\Development\Social_Media_Ionic_App\socialMedia\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_firestore__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeedPage = /** @class */ (function () {
    function FeedPage(navCtrl, navParams, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.text = "";
        this.posts = [];
        this.pageSize = 10;
        this.getPosts();
    }
    FeedPage.prototype.getPosts = function () {
        var _this = this;
        this.posts = [];
        var loading = this.loadingCtrl.create({
            content: "Loading Feed...."
        });
        loading.present();
        var query = __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.firestore().collection("posts").orderBy("created", "desc")
            .limit(this.pageSize);
        //query.onSnapshot((snapshot)=>{
        //   let changeDocs = snapshot.docChanges;
        //   changeDocs.forEach(change=> {
        //     if(change.type=="added"){
        //       //Todo
        //     }
        //     if(change.type=="modified"){
        //       //Todo
        //       console.log("Document with id " +change.doc.id+ "has been modified");
        //     }
        //     if(change.type=="removed"){
        //       //Todo
        //     }
        //   });
        //   console.log("Changed")
        // })
        query.get().then(function (docs) {
            docs.forEach(function (doc) {
                _this.posts.push(doc);
            });
            loading.dismiss();
            _this.cursor = _this.posts[_this.posts.length - 1];
            console.log(_this.posts);
        }).catch(function (err) {
            console.log(err);
        });
    };
    FeedPage.prototype.post = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.firestore().collection("posts").add({
            text: this.text,
            created: __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.firestore.FieldValue.serverTimestamp(),
            owner: __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth().currentUser.uid,
            owner_name: __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth().currentUser.displayName
        }).then(function (doc) {
            _this.text = "";
            _this.toastCtrl.create({
                message: "Your post has been created successfully",
                duration: 3000
            }).present();
            console.log(doc);
            _this.getPosts();
        }).catch(function (err) {
            console.log(err);
        });
    };
    FeedPage.prototype.ago = function (time) {
        var difference = __WEBPACK_IMPORTED_MODULE_4_moment___default()(time).diff(__WEBPACK_IMPORTED_MODULE_4_moment___default()());
        return __WEBPACK_IMPORTED_MODULE_4_moment___default.a.duration(difference).humanize();
    };
    FeedPage.prototype.loadMorePosts = function (event) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.firestore().collection("posts").orderBy("created", "desc").startAfter(this.cursor).limit(this.pageSize).get().then(function (docs) {
            docs.forEach(function (doc) {
                _this.posts.push(doc);
            });
            console.log(_this.posts);
            if (docs.size < _this.pageSize) {
                //all document have been loaded
                event.enable(false);
                _this.infiniteEvent = event;
            }
            else {
                event.complete();
                _this.cursor = _this.posts[_this.posts.length - 1];
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    FeedPage.prototype.refresh = function (event) {
        this.posts = [];
        this.getPosts();
        if (this.infiniteEvent) {
            this.infiniteEvent.enable(true);
        }
        event.complete();
    };
    FeedPage.prototype.logout = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth().signOut().then(function () {
            _this.toastCtrl.create({
                message: "You have been logged out successfully",
                duration: 3000
            }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        });
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"C:\Rishav\Development\Social_Media_Ionic_App\socialMedia\src\pages\feed\feed.html"*/'\n<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Your feed</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only clear (click)="logout()">\n        <ion-icon name="log-out">\n\n        </ion-icon>\n\n\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <ion-row margin class="rowStyle">\n    <button ion-button icon-only color="danger" clear>\n     <ion-icon name="images">\n\n     </ion-icon>\n\n\n    </button>\n\n    <ion-input type="text" placeholder="Say something...." [(ngModel)]="text">\n\n\n    </ion-input>\n\n    <button ion-button icon-only color="danger" clear  (click)="post()">\n      <ion-icon name="send" >\n\n      </ion-icon>\n\n\n     </button>\n\n  </ion-row>\n\n  <ion-refresher (ionRefresh)="refresh($event)">\n    <ion-refresher-content>\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-card  *ngFor="let post of posts">\n    <ion-item-divider color="danger">\n      {{post.data().owner_name}} Says\n\n    </ion-item-divider>\n    <ion-item text-wrap>\n      {{post.data().text}}\n    </ion-item>\n\n    <ion-row class="bottom-bar">\n      <ion-col>\n\n        <button ion-button block icon-left clear small color="danger" class="border-right">\n          <ion-icon name="thumbs-up">\n\n            <small> 12 Likes</small>\n\n          </ion-icon>\n\n        </button>\n\n      </ion-col>\n      <ion-col>\n\n        <button ion-button block icon-left clear small color="danger" class="border-right">\n          <ion-icon name="text">\n            <small>12 Comments</small>\n\n          </ion-icon>\n\n        </button>\n\n      </ion-col>\n      <button ion-button block icon-left clear small color="danger">\n\n     <small>{{ago(post.data().created)}} ago</small>\n\n      </button>\n\n      <ion-col>\n\n      </ion-col>\n\n    </ion-row>\n  </ion-card>\n\n  <ion-infinite-scroll (ionInfinite)="loadMorePosts($event)">\n    <ion-infinite-scroll-content>\n\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"C:\Rishav\Development\Social_Media_Ionic_App\socialMedia\src\pages\feed\feed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ToastController */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 231;

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feed_feed__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.name = "";
        this.email = "";
        this.password = "";
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.signUp = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().createUserWithEmailAndPassword(this.email, this.password).then(function (data) {
            console.log(data);
            var newUser = data;
            console.log(newUser);
            newUser.updateProfile({
                displayName: _this.name,
                photoURL: ""
            }).then(function () {
                console.log();
                _this.alertCtrl.create({
                    title: "Account Created",
                    message: "Your account has been created sucessfully.",
                    buttons: [{
                            text: "OK",
                            handler: function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__feed_feed__["a" /* FeedPage */]);
                            }
                        }]
                }).present();
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
            _this.toastCtrl.create({
                message: err.message,
                duration: 3000
            }).present();
        });
    };
    SignUpPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"C:\Rishav\Development\Social_Media_Ionic_App\socialMedia\src\pages\sign-up\sign-up.html"*/'<ion-header >\n  <ion-navbar color="danger">\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-item text-center no-lines>\n  <ion-icon name="logo-rss" class="logo" color="light">\n\n  </ion-icon>\n</ion-item>\n\n<ion-item text-center no-lines>\n  <h1>\n    Social Media\n  </h1>\n\n  <h6>\n    an app for continous posts\n  </h6>\n\n</ion-item>\n\n<ion-grid style="width: 75%;">\n\n  <ion-row class="rowStyle">\n    <ion-icon name="person" color="danger"></ion-icon>\n    <ion-input type="text" placeholder="your name" [(ngModel)]="name"></ion-input>\n\n  </ion-row>\n  <ion-row class="rowStyle">\n    <ion-icon name="mail" color="danger"></ion-icon>\n    <ion-input type="email" placeholder="your email" [(ngModel)]="email"></ion-input>\n\n  </ion-row>\n\n  <ion-row class="rowStyle">\n    <ion-icon name="key" color="danger"></ion-icon>\n    <ion-input type="password" placeholder="your password" [(ngModel)]="password"></ion-input>\n\n  </ion-row>\n\n  <ion-row>\n    <button ion-button block round outline color="light" style="margin-top: 20px;" (click)="signUp()">\n      Sign Up\n    </button>\n  </ion-row>\n\n</ion-grid>\n\n<button ion-button block clear color="light" (click)="goBack()">\n\n  Already have an account? Login.\n\n</button>\n</ion-content>\n'/*ion-inline-end:"C:\Rishav\Development\Social_Media_Ionic_App\socialMedia\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(485);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_feed_feed__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var firebaseConfig = {
    apiKey: "AIzaSyD9W9mudTQCwt6H5fN8hhKhySpNbpmYtUQ",
    authDomain: "socialmedia-3acac.firebaseapp.com",
    projectId: "socialmedia-3acac",
    storageBucket: "socialmedia-3acac.appspot.com",
    messagingSenderId: "311553114704",
    appId: "1:311553114704:web:133172b4ab351b7ffd8755"
};
// Initialize Firebase
__WEBPACK_IMPORTED_MODULE_8_firebase___default.a.initializeApp(firebaseConfig);
// firebase.firestore().settings({
//   timestampsInSnapshots: true
// })
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_feed_feed__["a" /* FeedPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_feed_feed__["a" /* FeedPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Rishav\Development\Social_Media_Ionic_App\socialMedia\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Rishav\Development\Social_Media_Ionic_App\socialMedia\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 327,
	"./af.js": 327,
	"./ar": 328,
	"./ar-dz": 329,
	"./ar-dz.js": 329,
	"./ar-kw": 330,
	"./ar-kw.js": 330,
	"./ar-ly": 331,
	"./ar-ly.js": 331,
	"./ar-ma": 332,
	"./ar-ma.js": 332,
	"./ar-sa": 333,
	"./ar-sa.js": 333,
	"./ar-tn": 334,
	"./ar-tn.js": 334,
	"./ar.js": 328,
	"./az": 335,
	"./az.js": 335,
	"./be": 336,
	"./be.js": 336,
	"./bg": 337,
	"./bg.js": 337,
	"./bm": 338,
	"./bm.js": 338,
	"./bn": 339,
	"./bn-bd": 340,
	"./bn-bd.js": 340,
	"./bn.js": 339,
	"./bo": 341,
	"./bo.js": 341,
	"./br": 342,
	"./br.js": 342,
	"./bs": 343,
	"./bs.js": 343,
	"./ca": 344,
	"./ca.js": 344,
	"./cs": 345,
	"./cs.js": 345,
	"./cv": 346,
	"./cv.js": 346,
	"./cy": 347,
	"./cy.js": 347,
	"./da": 348,
	"./da.js": 348,
	"./de": 349,
	"./de-at": 350,
	"./de-at.js": 350,
	"./de-ch": 351,
	"./de-ch.js": 351,
	"./de.js": 349,
	"./dv": 352,
	"./dv.js": 352,
	"./el": 353,
	"./el.js": 353,
	"./en-au": 354,
	"./en-au.js": 354,
	"./en-ca": 355,
	"./en-ca.js": 355,
	"./en-gb": 356,
	"./en-gb.js": 356,
	"./en-ie": 357,
	"./en-ie.js": 357,
	"./en-il": 358,
	"./en-il.js": 358,
	"./en-in": 359,
	"./en-in.js": 359,
	"./en-nz": 360,
	"./en-nz.js": 360,
	"./en-sg": 361,
	"./en-sg.js": 361,
	"./eo": 362,
	"./eo.js": 362,
	"./es": 363,
	"./es-do": 364,
	"./es-do.js": 364,
	"./es-mx": 365,
	"./es-mx.js": 365,
	"./es-us": 366,
	"./es-us.js": 366,
	"./es.js": 363,
	"./et": 367,
	"./et.js": 367,
	"./eu": 368,
	"./eu.js": 368,
	"./fa": 369,
	"./fa.js": 369,
	"./fi": 370,
	"./fi.js": 370,
	"./fil": 371,
	"./fil.js": 371,
	"./fo": 372,
	"./fo.js": 372,
	"./fr": 373,
	"./fr-ca": 374,
	"./fr-ca.js": 374,
	"./fr-ch": 375,
	"./fr-ch.js": 375,
	"./fr.js": 373,
	"./fy": 376,
	"./fy.js": 376,
	"./ga": 377,
	"./ga.js": 377,
	"./gd": 378,
	"./gd.js": 378,
	"./gl": 379,
	"./gl.js": 379,
	"./gom-deva": 380,
	"./gom-deva.js": 380,
	"./gom-latn": 381,
	"./gom-latn.js": 381,
	"./gu": 382,
	"./gu.js": 382,
	"./he": 383,
	"./he.js": 383,
	"./hi": 384,
	"./hi.js": 384,
	"./hr": 385,
	"./hr.js": 385,
	"./hu": 386,
	"./hu.js": 386,
	"./hy-am": 387,
	"./hy-am.js": 387,
	"./id": 388,
	"./id.js": 388,
	"./is": 389,
	"./is.js": 389,
	"./it": 390,
	"./it-ch": 391,
	"./it-ch.js": 391,
	"./it.js": 390,
	"./ja": 392,
	"./ja.js": 392,
	"./jv": 393,
	"./jv.js": 393,
	"./ka": 394,
	"./ka.js": 394,
	"./kk": 395,
	"./kk.js": 395,
	"./km": 396,
	"./km.js": 396,
	"./kn": 397,
	"./kn.js": 397,
	"./ko": 398,
	"./ko.js": 398,
	"./ku": 399,
	"./ku.js": 399,
	"./ky": 400,
	"./ky.js": 400,
	"./lb": 401,
	"./lb.js": 401,
	"./lo": 402,
	"./lo.js": 402,
	"./lt": 403,
	"./lt.js": 403,
	"./lv": 404,
	"./lv.js": 404,
	"./me": 405,
	"./me.js": 405,
	"./mi": 406,
	"./mi.js": 406,
	"./mk": 407,
	"./mk.js": 407,
	"./ml": 408,
	"./ml.js": 408,
	"./mn": 409,
	"./mn.js": 409,
	"./mr": 410,
	"./mr.js": 410,
	"./ms": 411,
	"./ms-my": 412,
	"./ms-my.js": 412,
	"./ms.js": 411,
	"./mt": 413,
	"./mt.js": 413,
	"./my": 414,
	"./my.js": 414,
	"./nb": 415,
	"./nb.js": 415,
	"./ne": 416,
	"./ne.js": 416,
	"./nl": 417,
	"./nl-be": 418,
	"./nl-be.js": 418,
	"./nl.js": 417,
	"./nn": 419,
	"./nn.js": 419,
	"./oc-lnc": 420,
	"./oc-lnc.js": 420,
	"./pa-in": 421,
	"./pa-in.js": 421,
	"./pl": 422,
	"./pl.js": 422,
	"./pt": 423,
	"./pt-br": 424,
	"./pt-br.js": 424,
	"./pt.js": 423,
	"./ro": 425,
	"./ro.js": 425,
	"./ru": 426,
	"./ru.js": 426,
	"./sd": 427,
	"./sd.js": 427,
	"./se": 428,
	"./se.js": 428,
	"./si": 429,
	"./si.js": 429,
	"./sk": 430,
	"./sk.js": 430,
	"./sl": 431,
	"./sl.js": 431,
	"./sq": 432,
	"./sq.js": 432,
	"./sr": 433,
	"./sr-cyrl": 434,
	"./sr-cyrl.js": 434,
	"./sr.js": 433,
	"./ss": 435,
	"./ss.js": 435,
	"./sv": 436,
	"./sv.js": 436,
	"./sw": 437,
	"./sw.js": 437,
	"./ta": 438,
	"./ta.js": 438,
	"./te": 439,
	"./te.js": 439,
	"./tet": 440,
	"./tet.js": 440,
	"./tg": 441,
	"./tg.js": 441,
	"./th": 442,
	"./th.js": 442,
	"./tk": 443,
	"./tk.js": 443,
	"./tl-ph": 444,
	"./tl-ph.js": 444,
	"./tlh": 445,
	"./tlh.js": 445,
	"./tr": 446,
	"./tr.js": 446,
	"./tzl": 447,
	"./tzl.js": 447,
	"./tzm": 448,
	"./tzm-latn": 449,
	"./tzm-latn.js": 449,
	"./tzm.js": 448,
	"./ug-cn": 450,
	"./ug-cn.js": 450,
	"./uk": 451,
	"./uk.js": 451,
	"./ur": 452,
	"./ur.js": 452,
	"./uz": 453,
	"./uz-latn": 454,
	"./uz-latn.js": 454,
	"./uz.js": 453,
	"./vi": 455,
	"./vi.js": 455,
	"./x-pseudo": 456,
	"./x-pseudo.js": 456,
	"./yo": 457,
	"./yo.js": 457,
	"./zh-cn": 458,
	"./zh-cn.js": 458,
	"./zh-hk": 459,
	"./zh-hk.js": 459,
	"./zh-mo": 460,
	"./zh-mo.js": 460,
	"./zh-tw": 461,
	"./zh-tw.js": 461
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 658;

/***/ })

},[462]);
//# sourceMappingURL=main.js.map