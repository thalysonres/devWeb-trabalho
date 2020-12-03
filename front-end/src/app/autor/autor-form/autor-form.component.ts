import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AutorService } from '../autor.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-autor-form',
  templateUrl: './autor-form.component.html',
  styleUrls: ['./autor-form.component.scss']
})
export class AutorFormComponent implements OnInit {

  autor: any = []

  title: string = 'Novo autor'

  constructor(private servAut: AutorService, private actRoute: ActivatedRoute, private snackBar: MatSnackBar, private location: Location) { }

  async ngOnInit() {

    if( this.actRoute.snapshot.params['id'] ){
          try{
            this.autor = await this.servAut.obterUm( this.actRoute.snapshot.params['id'] )

            this.title = 'Editando Autor'

        }catch(erro){
              console.log(erro)
              this.snackBar.open('ERRO: nao foi possivel carregar dados para edicao', 'X(', {
                  duration: 5000
              })
          }
      }

  }

  async salvar(form: NgForm){
    if(form.valid){

        try{

            // se o prateleira ja exiestir (caso de edicao), ele ja tera
            // o atributo _id

            if(this.autor._id){
                await this.servAut.atualizar(this.autor) // atualizacao
                this.snackBar.open('Dados ATUALIZADOS com sucesso!!!', 'X', {
                    duration: 5000
                })
                // this.location.back()
            }else{
                // 1 - salvar os dados no back-end
                await this.servAut.novo(this.autor)
                // 2 - dar o feedback para o usuario
                this.snackBar.open('Dados salvos com sucesso!!!', 'X', {
                    duration: 5000
                })
                // 3 - voltar ao componente de listagem

            }

            this.location.back()
        }
        catch(erro){
            console.log(erro)
            this.snackBar.open('ERRO: nao foi possivel salvar', 'X(', {
                duration: 5000
            })
        }


    }
  }

  voltar(form: NgForm){
    let result = true
    // from.dirty = formlulario sujo, nao salvo(via codigo)
    // from.touched = o conteudo de algum campo foi alterado (via usuario)
    if(form.dirty && form.touched){
        result = confirm('Há dados não salvos. Deseja realmente voltar??')
    }
    if(result) this.location.back()
  }

}
