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
  displayedColumns: String[] = ['prateleiras', 'corredor', 'editar', 'excluir']

  constructor(private servPrat: PrateleiraService, private snack: MatSnackBar) { }

  async ngOnInit() {
    this.prateleiras = await this.servPrat.listar()
    console.log(this.prateleiras)
  }



}
