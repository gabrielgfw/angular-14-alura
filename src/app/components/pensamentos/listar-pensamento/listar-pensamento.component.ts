import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [{
    conteudo: 'Angular teste',
    autoria: 'Werner',
    modelo: 'modelo3'
  },
  {
    conteudo: 'Angular teste 2',
    autoria: 'Werner',
    modelo: 'modelo2'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
