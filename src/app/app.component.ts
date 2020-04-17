import { Component } from '@angular/core';

@Component({ //Piezas de código que componen el programa.
  selector: 'app-root', //Nombre de etiqueta
  templateUrl: './app.component.html', //El html asociado a la clase
  styleUrls: ['./app.component.css'] //EL CSS asociado a ese componente
})
export class AppComponent {
  title = 'Bienvenidos';

  curso: string = "Curso Spring 5 con Angular";
  profesor: string = "Maroto";
  edad = 20;
}
