import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-telacadastro',
  templateUrl: './telacadastro.component.html',
  styleUrls: ['./telacadastro.component.css']
})
export class TelacadastroComponent implements OnInit {

  cadastro: Array<any>;

  constructor(private angularFire: AngularFireDatabase) { }

  ngOnInit() {
    this.cadastro = new Array<any>();
  }

  form_submit(f: NgForm) {
    this.angularFire.list('cadastro')
      .push({
        nome: f.form.controls.nome.value,
        empresa: f.form.controls.empresa.value,
        email: f.form.controls.email.value,
        cpf: f.form.controls.cpf.value,
        senha: f.form.controls.senha.value,
        confsenha: f.form.controls.confsenha.value})
      .then((t: any) => console.log('dados gravados: ' + t.key)),
    // tslint:disable-next-line:no-unused-expression
    (e: any) => console.log(e.message);

    f.controls.nome.setValue('');
    f.controls.empresa.setValue('');
    f.controls.email.setValue('');
    f.controls.cpf.setValue('');
    f.controls.senha.setValue('');
    f.controls.confsenha.setValue('');
  }

}
