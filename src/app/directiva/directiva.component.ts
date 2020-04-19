import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})

export class DirectivaComponent {

  listaCurso: string[] = ['TypeScript', 'JavaScript' , 'Java SE' , 'C#' , 'PHP']

  //Habilitar o deshabilitar el botón
  habilitar: boolean = true;

  constructor() { }

  setHabilitar(): void {
    this.habilitar = (this.habilitar)? false: true;
  }
}
