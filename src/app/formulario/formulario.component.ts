import { Component, OnInit } from '@angular/core';
import { Personagem } from '../personagem';
import { PersonagemService } from '../personagem.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  personagem:Personagem;
  personagemClasse:string;
  personagemQualidade:string;
  constructor(private service:PersonagemService) {this.personagem = new Personagem() }

  ngOnInit(): void {
  }

  salvar(personagem:Personagem){
    console.log(personagem);
  }

  onSubmit(){
    this.personagem.classe = this.classe(this.personagemClasse)
    this.personagem.qualidade = this.qualidade(this.personagemQualidade)
    this.service
      .salvar(this.personagem)
      .subscribe(response =>{[
        console.log(this.personagem)
      ]})
  }

  classe(classe:string){
    switch(this.personagemClasse){
      case "ATACANTE_FISICO":
        return 0;
      case "ATACANTE_MAGICO":
        return 1;
      case "ATACANTE_HIBRIDO":
        return 2;
      case "SUPORT":
        return 3;
      case "BREAKER":
        return 4;
      case "HEALER":
        return 5;
      case "TANKER_FISICO":
        return 6;
      case "TANKER_MAGICO":
        return 7;
    }
  }

  qualidade(qualidade:string){
    switch(this.personagemQualidade){
      case "FIVE_STAR":
        return 0;
      case "NV":
        return 1;
    }
  }

}
