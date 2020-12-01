import { BibliotecariaService } from './../bibliotecaria.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bibliotecaria-list',
  templateUrl: './bibliotecaria-list.component.html',
  styleUrls: ['./bibliotecaria-list.component.scss']
})
export class BibliotecariaListComponent implements OnInit {

  bibliotecarias: any = []
  displayedColumns: String[] = ['nome', 'telefone', 'endereco', 'cpf', 'data', 'editar', 'excluir']

  constructor(private servBibli: BibliotecariaService, private snackBar: MatSnackBar) {  }

  async ngOnInit(){

    this.bibliotecarias = await this.servBibli.listar()
    console.log(this.bibliotecarias)

  }

  async excluir(id: string){
      if(confirm("Dese excluir?")){
          try {
              await this.servBibli.excluir(id)
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
