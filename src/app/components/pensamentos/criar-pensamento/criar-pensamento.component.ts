import { Component, OnInit } from '@angular/core';
import { EModeloPensamento } from 'src/app/shared/enum/EModeloPensamento';
import { PensamentoModel } from 'src/app/shared/model/PensamentoModel';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: PensamentoModel = {
    conteudo: 'Teste',
    autoria: 'Dev',
    modelo: EModeloPensamento.MODELO_1
  }

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    if(this.pensamento.autoria && this.pensamento.conteudo) {
      this.pensamentoService.criar(this.pensamento).subscribe((sucesso) => {
        alert('Sucesso, pensamento criado!');
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

}
