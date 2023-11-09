import { Component, OnInit } from '@angular/core';
import { IHistorico } from '../../Model/Ihistorico';
import { HistoricoService } from './historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit{
  public listaHistorico!: IHistorico[];
  
  constructor(
    private historicoService: HistoricoService
  ){}
  
  ngOnInit(): void {
    this.listaHistorico = this.historicoService.getAll()
  }

  btnLimpar() {
    this.historicoService.limpar()
    this.listaHistorico = this.historicoService.getAll()
  }
}