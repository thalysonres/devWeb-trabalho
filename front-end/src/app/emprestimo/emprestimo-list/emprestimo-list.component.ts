import { Component, OnInit } from '@angular/core';
import { EmprestimoService } from '../emprestimo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-emprestimo-list',
  templateUrl: './emprestimo-list.component.html',
  styleUrls: ['./emprestimo-list.component.scss']
})
export class EmprestimoListComponent implements OnInit {

  emprestimos: any = []
  displayedColumns: String[] = ['data_emprestimo', 'data_devolucao', 'estudante', 'bibliotecaria', 'obra', 'editar', 'excluir']

  constructor(private servEmpre: EmprestimoService, private snackBar: MatSnackBar) { }

  async ngOnInit() {
    this.emprestimos = await this.servEmpre.listar()
    console.log(this.emprestimos)
  }

  async excluir(id: string){
      if(confirm("Deseja excluir?")){
          try {
              await this.servEmpre.excluir(id)
              // 1) recarregar os dados da tabela
              this.ngOnInit()
              // 2) Dar feedback para o usuario com mensagem
              this.snackBar.open('Item excluído com sucesso', 'X', {
                  duration: 5000 // 5 segundos
              })
          }
          catch(erro){
            //3) dar o feedback de erro para o
            this.snackBar.open('ERRO: não foi possível excluir este item', 'Que pena', {
                  duration: 5000 // 5 segundos
              })
              console.log(erro)
          }
      }
  }
}


