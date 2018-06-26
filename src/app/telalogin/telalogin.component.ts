import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit, HostBinding } from '@angular/core';
import {Routes, RouterModule, Router, RouterLink} from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-telalogin',
  templateUrl: './telalogin.component.html',
  styleUrls: ['./telalogin.component.css']
})
export class TelaloginComponent implements OnInit {

  constructor(public firebasee: AngularFireAuth, private router: Router) {
   }



  ngOnInit() {
  }


  signInWithGoogle() {
    return this.firebasee.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then((res) => {
      this.router.navigate(['/tela-user']);
    })
  .catch((err) => console.log(err));
  }

  signInWithFacebook() {
    return this.firebasee.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    ).then((res) => {
      this.router.navigate(['/tela-user']);
    })
  .catch((err) => console.log(err));
  }
}
