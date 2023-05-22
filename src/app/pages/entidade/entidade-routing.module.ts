import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliarEstudanteComponent } from './avaliar-estudante/avaliar-estudante.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { EntidadeComponent } from './entidade.component';
import { GerarRelatorioComponent } from './gerar-relatorio/gerar-relatorio.component';
import { CadastrarVagaComponent } from './home/cadastrar-vaga/cadastrar-vaga.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { VagasComponent } from './vagas/vagas.component';
import { DetalhesComponent } from './vagas/detalhes/detalhes.component';
import { DetalheEstudanteComponent } from './vagas/detalhes/detalhe-estudante/detalhe-estudante.component';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { AuthGuard } from 'src/app/guards/auth-guard';
import { Pagina404Component } from '../pagina404/pagina404.component';
import { VagasAndamentoComponent } from './vagas-andamento/vagas-andamento.component';
import { VagasAbertasComponent } from './vagas-abertas/vagas-abertas.component';

const routes: Routes = [
  {
    path: '',
    component: EntidadeComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: {role: 'Entidade'},
      },
      {
        path: 'Home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: {role: 'Entidade'},
      },
      {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [AuthGuard],
        data: {role: 'Entidade'},
      },
      {
        path: 'vagas',
        component: VagasComponent,
        canActivate: [AuthGuard],
        data: {role: 'Entidade'},
      },
      {
        path: 'vagas-abertas',
        component: VagasAbertasComponent,
        canActivate: [AuthGuard],
        data: {role: 'Entidade'},
      },
      {
        path: 'vagas-andamento',
        component: VagasAndamentoComponent,
        canActivate: [AuthGuard],
        data: {role: 'Entidade'},
      },
      {
        path: 'detalhe-vaga',
        component: DetalhesComponent,
        canActivate: [AuthGuard],
        data: {role: 'Entidade'},
      },
      {
        path: 'cadastrar-vaga',
        component: CadastrarVagaComponent,
        canActivate: [AuthGuard],
        data: {role: 'Entidade'},
      },
      {
        path: 'gerar-relatorio',
        component: GerarRelatorioComponent,
        canActivate: [AuthGuard],
        data: {role: 'Entidade'},
      },
      {
        path: 'gerar-certificado',
        component: CertificadoComponent,
        canActivate: [AuthGuard],
        data: {role: 'Entidade'},
      },
      {
        path: 'avaliar-estudante',
        component: AvaliarEstudanteComponent,
        canActivate: [AuthGuard],
        data: {role: 'Entidade'},
      },
      {
        path: 'detalhe-estudante',
        component: DetalheEstudanteComponent,
        canActivate: [AuthGuard],
        data: {role: 'Entidade'},
      },
      {
        path: 'notificacoes',
        component: NotificacaoComponent,
        canActivate: [AuthGuard],
        data: {role: 'Entidade'},
      },
      {
        path: '**',
        component: Pagina404Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntidadeRoutingModule {}
