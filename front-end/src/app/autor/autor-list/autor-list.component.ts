import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { AutorService } from '../autor.service';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.scss']
})
export class AutorListComponent implements OnInit {

  autores: any = []
  displayedColumns: String[] = ['nome', 'pais', 'genero', 'resumo', 'editar', 'excluir']

  constructor(private servAutor: AutorService, private snackBar: MatSnackBar) { }

  async ngOnInit() {
    this.autores = await this.servAutor.listar()
    console.log(this.autores)
  }

  async excluir(id: string){
      if(confirm("Dese excluir?")){
          try {
              await this.servAutor.excluir(id)
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
