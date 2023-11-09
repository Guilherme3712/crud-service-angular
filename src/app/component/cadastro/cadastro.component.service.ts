import { Injectable } from '@angular/core'
import { ICadastroTrem } from '../../Model/Icadastro-trem'
import { HistoricoService } from '../historico/historico.service';


@Injectable ({
    providedIn:'root'
})

export class CadastroService{
    constructor(private historicoService: HistoricoService) {}
    //trems = ["Locomotiva", "Thomas, o Trem", "Trem Mineiro", "Trem bala", "Maria-Fumaça"]
        trems:ICadastroTrem[] = [{
        nome:"Locomotiva",
        quantidade: 2
    },
    {
        nome:"Thomas o trem",
        quantidade: 1
    }]

    adicionar(nomeRecebido: string, quantidadeRecebido: number):void{
        const novoTrem:ICadastroTrem = {
            nome: nomeRecebido,
            quantidade: quantidadeRecebido,
        }
        this.trems.push(novoTrem)
        this.historicoService.push(novoTrem,"NOVO")
    }

    excluir(index:number):void{
        this.trems.splice(index,1)
        this.historicoService.push(this.trems[0], "EXCLUIR");
    }

    editar(index:number,nome:string, quantidade:number):void{
        if (index >= 0 && index < this.trems.length){
            this.trems[index].nome = nome;
            this.trems[index].quantidade = quantidade;  
        }
        this.historicoService.push(this.trems[index],"EDITAR");
    }

}