import { Component, OnInit } from '@angular/core';
import { ObraService } from '../obra.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-obra-list',
  templateUrl: './obra-list.component.html',
  styleUrls: ['./obra-list.component.scss']
})
export class ObraListComponent implements OnInit {

  obras: any = []
  displayedColumns: String[] = ['titulo', 'edicao', 'ano_edicao', 'numero_paginas', 'numero_copia', 'editora', 'tema', 'autor', 'prateleira', 'editar', 'excluir']

  constructor(private servOb: ObraService, private snackBar: MatSnackBar) { }

  async ngOnInit() {
    this.obras = await this.servOb.listar()
    console.log(this.obras)
  }

   async excluir(id: string){
      if(confirm("Dese excluir?")){
          try {
              await this.servOb.excluir(id)
              // 1) recarregar os dados da tabela
              this.ngOnInit()
              // 2) Dar feedback para o usuario com mensagem
              this.snackBar.open('Item excluido com sucesso', 'X', {
                  duration: 5000 // 5 segundos
              })
          }
          catch(erro){
            //3) dar o feedback de erro para o
            this.snackBar.open('ERRO!!: nao foi possivel excluir este item', 'X Que pena', {
                  duration: 5000 // 5 segundos
              })
              console.log(erro)
          }
      }
  }

}
