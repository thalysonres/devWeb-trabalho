import { Component, OnInit } from '@angular/core';
import { PrateleiraService } from '../prateleira.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-prateleira-list',
  templateUrl: './prateleira-list.component.html',
  styleUrls: ['./prateleira-list.component.scss']
})
export class PrateleiraListComponent implements OnInit {

  prateleiras: any = []
  displayedColumns: String[] = ['estante', 'corredor', 'editar', 'excluir']

  constructor(private servPrat: PrateleiraService, private snackBar: MatSnackBar) { }

  async ngOnInit() {
    this.prateleiras = await this.servPrat.listar()
    console.log(this.prateleiras)
  }

   async excluir(id: string){
      if(confirm("Dese excluir?")){
          try {
              await this.servPrat.excluir(id)
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
