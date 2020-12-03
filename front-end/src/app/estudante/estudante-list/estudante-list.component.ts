import { Component, OnInit } from '@angular/core';
import { EstudanteService } from '../estudante.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-estudante-list',
  templateUrl: './estudante-list.component.html',
  styleUrls: ['./estudante-list.component.scss']
})
export class EstudanteListComponent implements OnInit {

  estudantes: any = []
  displayedColumns: String[] = ['nome', 'telefone', 'endereco', 'cpf', 'senha', 'email', 'data_nascimento', 'data_cadastro', 'editar', 'excluir']

  constructor(private servEst: EstudanteService, private snackBar: MatSnackBar) { }

  async ngOnInit() {
    this.estudantes = await this.servEst.listar()
    console.log(this.estudantes)
  }

   async excluir(id: string){
      if(confirm("Dese excluir?")){
          try {
              await this.servEst.excluir(id)
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


