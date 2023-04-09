import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { CancelarModalComponent } from '../home/cancelar-modal/cancelar-modal.component';
import { VagaDetalhesComponent } from '../home/vaga-detalhes/vaga-detalhes.component';

@Component({
  selector: 'app-inscricoes',
  templateUrl: './inscricoes.component.html',
  styleUrls: ['./inscricoes.component.scss'],
})
export class InscricoesComponent implements OnInit {
  vagasCadastradas: any = [
    {
      id: 1,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História 1',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Sem requisitos',
      auxilio: 'Não',
      endereco: 'Rua tal, numero 23 - Bairro - Curitiba/PR',
      dia: '28/01/2023',
      horarioInicio: '13:00',
      horarioEncerramento: '17:00',
      numeroVagas: '3',
      status: 'Aberto',
      inscrito: true,
    },
    {
      id: 2,
      nomeEntidade: 'ONG 2',
      nomeVaga: 'Contador de História 2',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Sem requisitos',
      auxilio: 'Não',
      endereco: 'Rua tal, numero 23 - Bairro - Curitiba/PR',
      dia: '28/01/2023',
      horarioInicio: '13:00',
      horarioEncerramento: '17:00',
      numeroVagas: '3',
      status: 'Andamento',
      inscrito: true,
    },

    {
      id: 3,
      nomeEntidade: 'ONG 3',
      nomeVaga: 'Contador de História 3',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Sem requisitos',
      auxilio: 'Não',
      endereco: 'Rua tal, numero 23 - Bairro - Curitiba/PR',
      dia: '28/01/2023',
      horarioInicio: '13:00',
      horarioEncerramento: '17:00',
      numeroVagas: '3',
      status: 'Aberto',
      inscrito: true,
    },
    {
      id: 4,
      nomeEntidade: 'ONG 4',
      nomeVaga: 'Contador de História 4',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Sem requisitos',
      auxilio: 'Não',
      endereco: 'Rua tal, numero 23 - Bairro - Curitiba/PR',
      dia: '28/01/2023',
      horarioInicio: '13:00',
      horarioEncerramento: '17:00',
      numeroVagas: '3',
      status: 'Encerrado',
      inscrito: true,
    },
    {
      id: 5,
      nomeEntidade: 'ONG 5',
      nomeVaga: 'Contador de História 5',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Sem requisitos',
      auxilio: 'Não',
      endereco: 'Rua tal, numero 23 - Bairro - Curitiba/PR',
      dia: '28/01/2023',
      horarioInicio: '13:00',
      horarioEncerramento: '17:00',
      numeroVagas: '3',
      status: 'Encerrado',
      inscrito: true,
    },
    {
      id: 6,
      nomeEntidade: 'ONG 6',
      nomeVaga: 'Contador de História 6',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Sem requisitos',
      auxilio: 'Não',
      endereco: 'Rua tal, numero 23 - Bairro - Curitiba/PR',
      dia: '28/01/2023',
      horarioInicio: '13:00',
      horarioEncerramento: '17:00',
      numeroVagas: '3',
      status: 'Encerrado',
      inscrito: true,
    },
    {
      id: 7,
      nomeEntidade: 'ONG 7',
      nomeVaga: 'Contador de História 7',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Sem requisitos',
      auxilio: 'Não',
      endereco: 'Rua tal, numero 23 - Bairro - Curitiba/PR',
      dia: '28/01/2023',
      horarioInicio: '13:00',
      horarioEncerramento: '17:00',
      numeroVagas: '3',
      status: 'Encerrado',
      inscrito: true,
    },
  ];

  paginaAtual = 1;
  tamanhoPagina: number = this.vagasCadastradas.length;
  itemsPerPage = 6;
  public vagas: any = this.vagasCadastradas.slice(0, 6);

  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getStatus(status) {
    if (status == 'Aberto') {
      return 'bg-success text-white';
    } else if (status == 'Andamento') {
      return 'bg-warning';
    } else {
      return 'bg-secondary text-white';
    }
  }

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage * (pageNum - 1);
    this.vagas = this.vagasCadastradas.slice(
      this.tamanhoPagina,
      this.tamanhoPagina + 6
    );
  }

  //Vai exibir os detalhes da vaga antes de ele efetivar a inscrição
  exibirDetalhes(value: any): void {
    const dialogRef = this.dialog.open(VagaDetalhesComponent, {
      width: 'auto',
      data: this.vagasCadastradas[value],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  //Vai exibir uma modal para cadastro com as validações dos dados
  cadastrar(value: any): void {
    this.dataService.data = this.vagasCadastradas[value];
    this.router.navigate(['/Estudante/detalhe-vaga']);
  }

  //Quando o usuário clicar no botão para cancelar a inscrição
  cancelarInscricao(value: any) {
    const dialogRef = this.dialog.open(CancelarModalComponent, {
      width: '50%',
      data: this.vagasCadastradas[value],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  confirmarCancelamento(value: any) {
    //abrir modal confimando o cancelamento
  }
}
