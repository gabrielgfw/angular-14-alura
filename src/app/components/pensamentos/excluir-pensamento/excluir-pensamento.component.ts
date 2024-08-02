import { Component, OnInit } from '@angular/core';
import { PensamentoModel } from 'src/app/shared/model/PensamentoModel';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {
  pensamento: PensamentoModel = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.pensamentoService.buscarPensamentoPorId(id).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento() {
    if(this.pensamento.id) {
      this.pensamentoService.excluir(this.pensamento.id).subscribe(() => this.router.navigate(['/listarPensamento']))
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

}
