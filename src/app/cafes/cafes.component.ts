import { Component, OnInit } from '@angular/core';
import { Cafe } from './cafe';

import { CafeService } from './cafe.service';

@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.css']
})
export class CafesComponent implements OnInit {


  constructor(private cafeService: CafeService) { }
  cafes:Array<Cafe>=[];
  tiposCafes:Array<string>=[];
  cantidadCafes:Array<number>=[];

  getCafes():void {
      this.cafeService.getCafes().subscribe((cafes)=>{ this.cafes =cafes; this.getTipoCafes(this.cafes);});

    }
  getTipoCafes(cafes:any):void {

    let resultado=[];

    const tempArray = [...cafes]; //definimos el arreglo sobre el q trabajaremos
    const unique = [...new Set(tempArray.map(item => item.tipo))];//encontramos los tipos de cafe existentes
    for (let j=0; j<unique.length; j++){
      resultado.push(0); //iniciamos contadores
    }

    for (let i=0;i<tempArray.length;i++){
      for (let j=0; j<unique.length;j++){
        if (tempArray[i].tipo===unique[j]){
          resultado[j]++;
        }//vamos a recorrer el arreglo tempArray buscando cuantos unique hay
      }
    }
    this.tiposCafes=unique;
    this.cantidadCafes=resultado;

  }

  ngOnInit() {
    this.getCafes();



  }

}
