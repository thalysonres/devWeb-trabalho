import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BibliotecariaService } from './../bibliotecaria.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-bibliotecaria-form',
  templateUrl: './bibliotecaria-form.component.html',
  styleUrls: ['./bibliotecaria-form.component.scss']
})
export class BibliotecariaFormComponent implements OnInit {

  bibliotecaria: any = {}

  title: string = "Nova Bibliotecaria"

  constructor(private servPrat: BibliotecariaService, private snackBar: MatSnackBar, private actRoute: ActivatedRoute, private location: Location) { }

  async ngOnInit() {

    if( this.actRoute.snapshot.params['id'] ){
          try{
            this.bibliotecaria = await this.servPrat.obterUm( this.actRoute.snapshot.params['id'] )

            this.title = 'Editando bibliotecaria'

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

            if(this.bibliotecaria._id){
                await this.servPrat.atualizar(this.bibliotecaria) // atualizacao
                this.snackBar.open('Dados ATUALIZADOS com sucesso!!!', 'X', {
                    duration: 5000
                })
                // this.location.back()
            }else{
                // 1 - salvar os dados no back-end
                await this.servPrat.novo(this.bibliotecaria)
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

