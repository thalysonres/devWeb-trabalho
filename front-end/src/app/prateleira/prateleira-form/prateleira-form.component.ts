import { PrateleiraService } from './../prateleira.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-prateleira-form',
  templateUrl: './prateleira-form.component.html',
  styleUrls: ['./prateleira-form.component.scss']
})
export class PrateleiraFormComponent implements OnInit {

  prateleira: any = {}

  title: string = "Novo corredor"

constructor(private servPrat: PrateleiraService, private snackBar: MatSnackBar, private location: Location, private actRoute: ActivatedRoute) { }

  async ngOnInit(){
      // verifica se existe o parametro id no url (rota)
      if( this.actRoute.snapshot.params['id'] ){
          // 1 - acionar o back-end para buscar esse registro
          // e disponibiliza-lo para edicao
          try{
            this.prateleira = await this.servPrat.obterUm( this.actRoute.snapshot.params['id'] )
            // 2 - mudar titulo da pagina
            this.title = 'Editando prateleira'

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

            if(this.prateleira._id){
                await this.servPrat.atualizar(this.prateleira) // atualizacao
                this.snackBar.open('Dados ATUALIZADOS com sucesso!!!', 'X', {
                    duration: 5000
                })
                // this.location.back()
            }else{
                // 1 - salvar os dados no back-end
                await this.servPrat.novo(this.prateleira)
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
