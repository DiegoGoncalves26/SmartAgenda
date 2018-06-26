
import { CalendarModule } from 'primeng/calendar';
import { ScheduleModule } from 'primeng/schedule';
import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpEvent } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { EventService } from '../event.service';



@Component({
  selector: 'app-telauser',
  templateUrl: './telauser.component.html',
  styleUrls: ['./telauser.component.css']
})


export class TelauserComponent implements OnInit {

  cadastro: Observable<any[]>;

  //array de eventos do calendario
  events: any[];

  //array com o cabeçalho do calendario
  header: any;


  es: any[];

  private name: String;
  private img: any;
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;


  //construtor
  constructor(public firebasee: AngularFireAuth, private router: Router,
     db: AngularFireDatabase, private ev: EventService) {

      //exibir usuario
      this.user = firebasee.authState;
      this.user.subscribe(
              (user) => {
                if (user) {
                  this.userDetails = user;
                  this.name = this.userDetails.displayName;
                  this.img = this.userDetails.photoURL;
                }
                else {
                  this.userDetails = null;
                }
              }
            );
}


  ngOnInit() {

        this.ev.getEvents().then(eventos => {this.events = eventos; });

        this.header = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,list'
        };

  }
}

