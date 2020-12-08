import { Component, OnInit } from '@angular/core';
import { EstudanteService } from '../estudante.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BibliotecariaService } from 'src/app/bibliotecaria/bibliotecaria.service';

@Component({
  selector: 'app-estudante-form',
  templateUrl: './estudante-form.component.html',
  styleUrls: ['./estudante-form.component.scss']
})
export class EstudanteFormComponent implements OnInit {

  estudante: any = {}
  bibliotecarias: any = {}
  title: string = "Novo estudante"

  constructor(
    private servEst: EstudanteService,
    private snackBar: MatSnackBar,
    private location: Location,
    private actRoute: ActivatedRoute,
    private sercBibli: BibliotecariaService
  ) { }

  async ngOnInit() {
    // verifica se existe o parametro id no url (rota)
      if( this.actRoute.snapshot.params['id'] ){
          // 1 - acionar o back-end para buscar esse registro
          // e disponibiliza-lo para edicao
          try{
            this.estudante = await this.servEst.obterUm( this.actRoute.snapshot.params['id'] )
            // 2 - mudar titulo da pagina
            this.title = 'Editando estudante'

        }catch(erro){
              console.log(erro)
              this.snackBar.open('ERRO: não foi possível carregar dados para edição', 'X', {
                  duration: 5000
              })
          }
      }

      this.carregarDados()
  }

async salvar(form: NgForm){
    if(form.valid){

        try{

            // se o estudante ja exiestir (caso de edicao), ele ja tera
            // o atributo _id

            if(this.estudante._id){
                await this.servEst.atualizar(this.estudante) // atualizacao
                this.snackBar.open('Dados atualizados com sucesso!!!', 'X', {
                    duration: 5000
                })
                // this.location.back()
            }else{
                // 1 - salvar os dados no back-end
                await this.servEst.novo(this.estudante)
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
            this.snackBar.open('ERRO: não foi possível salvar', 'X', {
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

   async carregarDados() {
    try{
      this.bibliotecarias = await this.sercBibli.listar()
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open('ERRO: não foi possível carregar os dados necessários para a página.', 'Que Pena =/', { duration: 5000 })
    }
  }

}
