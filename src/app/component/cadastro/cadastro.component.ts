import { Component, OnInit } from "@angular/core";
import { CadastroService } from "./cadastro.component.service";
import { ICadastroTrem } from "../../Model/Icadastro-trem";
import { FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent implements OnInit{
    listaTrem!:ICadastroTrem[];
    nome!:string;
    quantidade!:number;
    editNome!:string;
    editQuantidade!:number;

    cadastroInput = new FormControl('', [Validators.required]);
    
    constructor(private cadastroService:CadastroService){
        this.listaTrem = this.cadastroService.trems;
    }
    ngOnInit(): void {
        this.listaTrem = this.cadastroService.trems;
      }
    adicionarNovoTrem():void{
        if(this.nome && this.quantidade){
            this.cadastroService.adicionar(this.nome, this.quantidade)
        }else{
            alert('Por favor, preencha todos os campos')
        }

    }
    excluirTrem(index:number):void{
        this.cadastroService.excluir(index)
    }

    salvarEdit(index:number){
        if(this.editNome && this.editQuantidade){
            const novoNome = this.editNome;
            const novaQuantidade = this.editQuantidade;
            this.cadastroService.editar(index,novoNome,novaQuantidade)
        }else if(this.editQuantidade){
            alert('Os campos não podem estar vazios')
        }

    }
    
    
}