import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  //Imagens animadas do site
  //https://br.freepik.com/search?format=search&page=5&query=voluntarios&type=vector

  public listBeneficios: any =
  [
    {
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      title: 'Transformação', 
      content: 'Embora o objetivo do voluntário seja melhorar a vida de outras pessoas, ele acaba melhorando muito a sua própria existência também.'
    },
    {
      img: '../../assets/imagens/pessoasDandoAsMaos.jpg',
      title: 'Maior conexão social', 
      content: 'Voluntariar para adquiri ou gostar de contato social, sair de casa e explorar suas próprias forças.'
    },
    {
      img: '../../assets/imagens/ideia.jpg',
      title: 'Desenvolver ideias', 
      content: 'Aproveite a liberdade que o trabalho voluntário proporciona e desenvola ideias geniais.'
    },
    {
      img: '../../assets/imagens/experienciasValiosass.png',
      title: 'Experiências valiosas', 
      content: 'O contato com várias pessoas em diferentes condições de vida e saúde, transforma vidas.'
    },
    {
      img: '../../assets/imagens/horasFormativas.PNG',
      title: 'Horas formativas', 
      content: 'Além de aprender, ajudar e viver incríveis experiências. Você pode usar as horas trabalhadas como horas formativas.'
    }
  ];

  vagasParaAmostra: any =  [
    {
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      title: 'Transformação', 
      content: 'Embora o objetivo do voluntário seja melhorar a vida de outras pessoas, ele acaba melhorando muito a sua própria existência também.'
    },
    {
      img: '../../assets/imagens/pessoasDandoAsMaos.jpg',
      title: 'Maior conexão social', 
      content: 'Voluntariar para adquiri ou gostar de contato social, sair de casa e explorar suas próprias forças.'
    },
    {
      img: '../../assets/imagens/ideia.jpg',
      title: 'Desenvolver ideias', 
      content: 'Aproveite a liberdade que o trabalho voluntário proporciona e desenvola ideias geniais.'
    },
    {
      img: '../../assets/imagens/experienciasValiosass.png',
      title: 'Experiências valiosas', 
      content: 'O contato com várias pessoas em diferentes condições de vida e saúde, transforma vidas.'
    },
    {
      img: '../../assets/imagens/horasFormativas.PNG',
      title: 'Horas formativas', 
      content: 'Além de aprender, ajudar e viver incríveis experiências. Você pode usar as horas trabalhadas como horas formativas.'
    },   {
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      title: 'Transformação', 
      content: 'Embora o objetivo do voluntário seja melhorar a vida de outras pessoas, ele acaba melhorando muito a sua própria existência também.'
    },
    {
      img: '../../assets/imagens/pessoasDandoAsMaos.jpg',
      title: 'Maior conexão social', 
      content: 'Voluntariar para adquiri ou gostar de contato social, sair de casa e explorar suas próprias forças.'
    },
    {
      img: '../../assets/imagens/ideia.jpg',
      title: 'Desenvolver ideias', 
      content: 'Aproveite a liberdade que o trabalho voluntário proporciona e desenvola ideias geniais.'
    },
    {
      img: '../../assets/imagens/experienciasValiosass.png',
      title: 'Experiências valiosas', 
      content: 'O contato com várias pessoas em diferentes condições de vida e saúde, transforma vidas.'
    },
    {
      img: '../../assets/imagens/horasFormativas.PNG',
      title: 'Horas formativas', 
      content: 'Além de aprender, ajudar e viver incríveis experiências. Você pode usar as horas trabalhadas como horas formativas.'
    }
  ];

  lermais: boolean = true;

  constructor() { }

  lerMais(){
    this.lermais = !this.lermais
  }

}
