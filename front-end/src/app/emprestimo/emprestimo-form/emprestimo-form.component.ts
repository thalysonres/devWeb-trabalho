import { Component, OnInit } from '@angular/core';
import { EmprestimoService } from '../emprestimo.service';
import { EstudanteService } from 'src/app/estudante/estudante.service';
import { BibliotecariaService } from 'src/app/bibliotecaria/bibliotecaria.service';
import { ObraService } from 'src/app/obra/obra.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-emprestimo-form',
  templateUrl: './emprestimo-form.component.html',
  styleUrls: ['./emprestimo-form.component.scss']
})
export class EmprestimoFormComponent implements OnInit {

  emprestimo: any = {}
  estudantes: any = {}
  bibliotecarias: any = {}
  obras: any = {}

  title: string = 'Novo empréstimo'

  constructor(
    private servEmp: EmprestimoService,
    private servEst: EstudanteService,
    private servBib: BibliotecariaService,
    private servObr: ObraService,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private location: Location
  ) { }

 async ngOnInit() {
    // verifica se existe o parametro id no url (rota)
      if( this.actRoute.snapshot.params['id'] ){
          // 1 - acionar o back-end para buscar esse registro
          // e disponibiliza-lo para edicao
          try{
            this.emprestimo = await this.servEmp.obterUm( this.actRoute.snapshot.params['id'] )
            // 2 - mudar titulo da pagina
            this.title = 'Editando empréstimo'

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

            // se o emprestimo ja exiestir (caso de edicao), ele ja tera
            // o atributo _id

            if(this.emprestimo._id){
                await this.servEmp.atualizar(this.emprestimo) // atualizacao
                this.snackBar.open('Dados atualizados com sucesso!!!', 'X', {
                    duration: 5000
                })
                // this.location.back()
            }else{
                // 1 - salvar os dados no back-end
                await this.servEmp.novo(this.emprestimo)
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
      this.bibliotecarias = await this.servBib.listar()
      this.estudantes = await this.servEst.listar()
      this.obras = await this.servObr.listar()
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open('ERRO: não foi possível carregar os dados necessários para a página.', 'Que Pena =/', { duration: 5000 })
    }
  }

}
