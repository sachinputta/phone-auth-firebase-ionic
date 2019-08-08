import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { AngularFireModule } from '@angular/fire';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebase = {
  // your firebase web config
  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
  authDomain: 'xxxxxxxxxxxxxxxxxxxxx',
  databaseURL: 'xxxxxxxxxxxxxxxxx',
  projectId: 'xxxxxxxxxxxxxx',
  storageBucket: 'xxxxxxxxxxxxxxxxxx',
  messagingSenderId: 'xxxxxxxxx',
  appId: 'xxxxxxxxxxxxxxxxx'
 };


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  // tslint:disable-next-line: max-line-length
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebase), AngularFireStorageModule, AngularFireDatabaseModule ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseAuthentication,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
