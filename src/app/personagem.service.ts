import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Personagem } from './personagem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  constructor(private http:HttpClient) { }

  salvar(personagem:Personagem):Observable<Personagem>{
    return this.http.post<Personagem>('http://localhost:8080/personagens',personagem);
  }
}
