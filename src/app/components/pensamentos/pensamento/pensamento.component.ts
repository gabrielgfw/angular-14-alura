import { Component, Input, OnInit } from '@angular/core';
import { PensamentoModel } from 'src/app/shared/model/PensamentoModel';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: PensamentoModel = { conteudo: '', autoria: '' };

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

}
