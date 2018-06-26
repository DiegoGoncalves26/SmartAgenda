import { EventService } from './../event.service';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-telanovoevento',
  templateUrl: './telanovoevento.component.html',
  styleUrls: ['./telanovoevento.component.css']
})
export class TelanovoeventoComponent implements OnInit {
  eventos: MyEvent;

  // array que recebe os dados para cadastro
  cadastro: Array<any>;

// data do campo data e horario
  date7: Date;
dataa: String;
  pegardata(evento) {
    this.dataa = evento.value;
    console.log(this.dataa);
  }



  // reponsavel por configurar o rating e suas mensagens
  // tslint:disable-next-line:member-ordering
  val5: number;
  // tslint:disable-next-line:member-ordering
  msg: String;
  handleRate(event) {
    this.msg = 'Prioridade do Evento: ' + event.value;
}

handleCancel(event) {
    this.msg = 'Prioridade Zerada!';
}
// fim do rating

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private Http: Http,private ev: EventService, private angularFire: AngularFireDatabase) { }

  ngOnInit() {
    this.cadastro = new Array<any>();
  }

  /*
  adicionar( title: String) {
    this.ev.adicionar({ title });
  }*/

  consultarCEP(cep, form){
    cep = cep.replace(/\D/g, '');

    if(cep != "") {

      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)){

        this.Http.get("//viacep.com.br/ws/"+ cep +"/json")
        .map(dados => dados.json())
        .subscribe(dados => this.popularDadosForm(dados, form));
      }

    }
  }

  popularDadosForm(dados, formulario) {

    formulario.form.patchValue({
      rua: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf
    });
}
//formulario cadastrar evento
form_submit(f: NgForm) {

this.eventos = new MyEvent();
this.eventos.title = f.form.controls.title.value;
this.eventos.start = f.form.controls.start.value;
this.eventos.end = f.form.controls.end.value;

  this.ev.adicionar(this.eventos);


  /*
  this.angularFire.list('cadastro')
    .push({
      cep: f.form.controls.cep.value,
      cidade: f.form.controls.cidade.value,
      bairro: f.form.controls.bairro.value,
      rua: f.form.controls.rua.value,
      uf: f.form.controls.uf.value,
      numero: f.form.controls.numero.value,
      data: f.form.controls.data.value,
      prioridade: f.form.controls.prioridade.value,
      descricao: f.form.controls.descricao.value
    })
    .then((t: any) => console.log('dados gravados: ' + t.key)),
  // tslint:disable-next-line:no-unused-expression
  (e: any) => console.log(e.message);
*/
  f.controls.cep.setValue('');
  f.controls.cidade.setValue('');
  f.controls.bairro.setValue('');
  f.controls.rua.setValue('');
  f.controls.uf.setValue('');
  f.controls.numero.setValue('');
  f.controls.start.setValue('');
  f.controls.end.setValue('');
  f.controls.prioridade.setValue('');
  f.controls.title.setValue('');
  this.msg = '';
  //console.log('data: ' + this.date7);

}

}

export class MyEvent {
  title: string;
  start: string;
  end: string;
}
