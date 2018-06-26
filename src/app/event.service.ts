import { Injectable } from '@angular/core';
import { HttpEvent } from '@angular/common/http';
import { Http } from '@angular/http';



@Injectable()
export class EventService {

  constructor(private http: Http) {}

    getEvents() {
        return this.http.get('http://localhost:8080/evento')
                    .toPromise()
                    .then(res => <any[]> res.json())
                    .then(data => data);
    }

    adicionar(evento: any): Promise<any> {
      return this.http.post('http://localhost:8080/evento', evento)
      .toPromise()
      .then(response => response.json());
    }

}
