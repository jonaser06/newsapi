import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  @ViewChild(IonSegment) segment: IonSegment;

  categorias = ['business','entertainment','general','health','science','sports','technology'];
  noticias : Article[] = [];

  constructor(private noticiasService: NoticiasService){

  }

  ngOnInit(){
    this.segment.value = this.categorias[0];
    this.CargarNoticias( this.categorias[0] );
  }
  CambioCategoria( event ){

    this.noticias = [];

    this.CargarNoticias( event.detail.value );
  }

  CargarNoticias(categoria : string){
    this.noticiasService.getTopLineCategoria(categoria).subscribe(
      resp=>{
        console.log(resp);
        this.noticias.push(...resp.articles);
      }
    );
  }

}
