import { TelacadastroComponent } from './telacadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireDatabase } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [AngularFireDatabase],
  exports: [TelacadastroComponent],
  declarations: [TelacadastroComponent]
})
export class TelacadastroModule { }
