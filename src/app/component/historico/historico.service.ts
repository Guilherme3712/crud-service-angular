import { Injectable } from '@angular/core';
import { IHistorico } from '../../Model/Ihistorico';
import { ICadastroTrem } from '../../Model/Icadastro-trem';
@Injectable({
  providedIn: 'root',
})
export class HistoricoService {
  private historico: IHistorico[] = [];

  getAll(){
    return this.historico;
  }
  push(data: ICadastroTrem, tipo: "EXCLUIR" | "NOVO" | "EDITAR") {
    this.historico.push({ ...data, tipo});
  }
  limpar(){
    this.historico = []
  }
}