import { EventService } from './event.service';
import { BrowserModule} from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpEvent } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {InputMaskModule} from 'primeng/inputmask';
import {ScheduleModule} from 'primeng/schedule';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {ToggleButtonModule, RatingModule, SliderModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TelaloginComponent } from './telalogin/telalogin.component';
import { TelacadastroComponent } from './telacadastro/telacadastro.component';
import { RoutingModule } from './app.router';
import { TelauserComponent } from './telauser/telauser.component';
import { TelanovoeventoComponent } from './telanovoevento/telanovoevento.component';

import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { OAuthProvider } from '@firebase/auth-types';

const routes: Routes = [
  {path: '', component: TelaloginComponent},
  {path: 'cadastro-user', component: TelacadastroComponent},
  {path: 'novo-evento', component: TelanovoeventoComponent},
  {path: 'tela-user', component: TelauserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    TelaloginComponent,
    TelacadastroComponent,
    TelauserComponent,
    TelanovoeventoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PasswordModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    InputMaskModule,
    RoutingModule,
    ScheduleModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    ToggleButtonModule,
    RatingModule,
    SliderModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    InputTextModule,
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
