import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { EModeloPensamento } from 'src/app/shared/enum/EModeloPensamento';
import { PensamentoModel } from 'src/app/shared/model/PensamentoModel';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Array<PensamentoModel> = [{
    conteudo: "Teste modelo",
    autoria: "Werner",
    modelo: EModeloPensamento.MODELO_1
  }];

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
    this.pensamentoService.listar().subscribe((response) => {
      this.listaPensamentos = response;
    });
  }

}
