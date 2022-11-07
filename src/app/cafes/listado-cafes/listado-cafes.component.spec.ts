/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ListadoCafesComponent } from './listado-cafes.component';
import { HttpClientModule } from '@angular/common/http';
import { CafeService } from 'src/app/cafes/cafe.service';
import { faker } from '@faker-js/faker';
import { Cafe } from '../cafe';

describe('ListadoCafesComponent', () => {
  let component: ListadoCafesComponent;
  let fixture: ComponentFixture<ListadoCafesComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListadoCafesComponent ],
      providers: [CafeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCafesComponent);
    component = fixture.componentInstance;

    const regiones=['Manizales', 'Antioquia', 'Boyaca', 'Santa Marta'];

// vamos a crear un arreglo de 3 cafes
const cafes:Array<Cafe>=[];

for (let i=0;i<3;i++){
  const cafe = new Cafe(
    faker.datatype.number({'min':1, 'max':3}),
    faker.name.fullName(),
    faker.name.fullName(),
    regiones[Math.floor(Math.random()*regiones.length)],
    faker.name.fullName(),
    faker.datatype.number({'min':100, 'max':2600}),
    faker.image.image()

   );
   component.cafes.push(cafe);

}
    fixture.detectChanges();
    debug=fixture.debugElement;
  });

 it('should create listado cafes', () => {
  expect(component).toBeTruthy();
  });

  it('Debe tener un encabezado de tabla <div.col-md-6> elements', () => {
    expect(debug.queryAll(By.css('div.col-md-6'))).toBeDefined();
  });


  it('debe tener 3 dd tag con el nombre cafe', () =>{
   /* expect(debug.query(By.css('dd.nombre')).nativeElement.textContent).toContain(
      component.cafes[1].nombre);*/
      expect(debug.queryAll(By.css('dd.nombre'))).toHaveSize(3);
  });
});
