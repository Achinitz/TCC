import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { DetalheEstudanteComponent } from './detalhe-estudante/detalhe-estudante.component';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit, OnDestroy {

  vaga: any;
  modalReference: any;

  requisitos: any = [
    {descricao: 'Ter 5 pós graduação'},
    {descricao: 'Algum ai'},
    {descricao: 'Algum ai'},
  ]

  inscritos: any = [
    {
      nome: 'Jeronimo',
      img: null,
      cpf: '123',
      curso: 'Analise de Sistemas',
      idade: 22,
      dataInscricao: '15/05/2022',
      status: 'Andamento'
    },
    {
      nome: 'Alienigena',
      img: null,
      cpf: '1234',
      curso: 'Analise de Sistemas',
      idade: 22,
      dataInscricao: '15/05/2022',
      status: 'Andamento'
    },
    {
      nome: 'Alex',
      img: null,
      cpf: '12345',
      curso: 'Analise de Sistemas',
      idade: 22,
      dataInscricao: '15/05/2022',
      status: 'Andamento'
    },
    {
      nome: 'Tebutrios',
      img: null,
      cpf: '123456',
      curso: 'Analise de Sistemas',
      idade: 22,
      dataInscricao: '15/05/2022',
      status: 'Andamento'
    }
  ]

  constructor(private dataService: DataService,private router: Router, private modalService: NgbModal) { 
    this.vaga = this.dataService.data;
    if(this.dataService.data.nomeEntidade == null){
      this.router.navigate(['/Entidade/vagas']);
    }
  }

  visualizarCandidato(candidato:any){
    // this.router.navigate(['/Entidade/detalhe-estudante']);
    const modalRef = this.modalService.open(DetalheEstudanteComponent, { windowClass: 'min-width: 80%; heigth: 50%;', centered: true });
    modalRef.componentInstance.candidato = candidato;
    modalRef.result
  }

  removerCandidato(candidato:any){
    Swal.fire({
      title: 'Deseja reprovar esse candidato para essa vaga?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Candidato Reprovado com sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.dataService.data = this.vaga;

  }

}
