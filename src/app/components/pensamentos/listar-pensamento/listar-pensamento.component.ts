import { Component, OnInit } from '@angular/core';
import { EModeloPensamento } from 'src/app/shared/enum/EModeloPensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [{
    conteudo: "Teste modelo",
    autoria: "Werner",
    modelo: EModeloPensamento.MODELO_1
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
