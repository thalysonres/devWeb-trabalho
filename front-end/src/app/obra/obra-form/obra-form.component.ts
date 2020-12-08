import { Component, OnInit } from '@angular/core';
import { ObraService } from '../obra.service';
import { ActivatedRoute } from '@angular/router';
import { PrateleiraService } from 'src/app/prateleira/prateleira.service';
import { AutorService } from 'src/app/autor/autor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-obra-form',
  templateUrl: './obra-form.component.html',
  styleUrls: ['./obra-form.component.scss']
})
export class ObraFormComponent implements OnInit {

  obra: any = {}
  autores: any = {}
  prateleiras: any = {}
  title: string = "Nova obra"

  constructor(
    private servOb: ObraService,
    private actRoute: ActivatedRoute,
    private serPrat: PrateleiraService,
    private servAut: AutorService,
    private snackBar: MatSnackBar,
    private location: Location,
  ) { }

  async ngOnInit() {
    // verifica se existe o parametro id no url (rota)
      if( this.actRoute.snapshot.params['id'] ){
          // 1 - acionar o back-end para buscar esse registro
          // e disponibiliza-lo para edicao
          try{
            this.obra = await this.servOb.obterUm( this.actRoute.snapshot.params['id'] )
            // 2 - mudar titulo da pagina
            console.log('--------------------->', this.obra)
            this.title = 'Editando obra'

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

            // se o autores ja exiestir (caso de edicao), ele ja tera
            // o atributo _id

            if(this.obra._id){
                await this.servOb.atualizar(this.obra) // atualizacao
                this.snackBar.open('Dados atualizados com sucesso!!!', 'X', {
                    duration: 5000
                })
                // this.location.back()
            }else{
                // 1 - salvar os dados no back-end
                await this.servOb.novo(this.obra)
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
      this.prateleiras = await this.serPrat.listar()
      this.autores = await this.servAut.listar()
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open('ERRO: não foi possível carregar os dados necessários para a página.', 'Que Pena =/', { duration: 5000 })
    }
  }

}
