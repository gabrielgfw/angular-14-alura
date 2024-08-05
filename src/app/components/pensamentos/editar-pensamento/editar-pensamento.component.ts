import { Component, OnInit } from '@angular/core';
import { PensamentoModel } from 'src/app/shared/model/PensamentoModel';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: PensamentoModel = {
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.pensamentoService.buscarPensamentoPorId(parseInt(id)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  editarPensamento() {
    this.pensamentoService.editar(this.pensamento).subscribe(() => {
      alert("Pensamento editado com sucesso!");
      this.router.navigate(['/listarPensamento']);
    })
  }


}
