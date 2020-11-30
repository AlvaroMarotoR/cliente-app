import { Component, OnInit } from '@angular/core';
import {Cliente} from './../cliente';
//Importamos el Service con las funciones que se hacen de los clientes para implementarlas.
import {ClienteService} from './../cliente.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente()
  public titulo: String = "Crear Cliente"

  //Creamos ese objeto Service que hemos importado.
  //Objeto router para redirigir a alguna url.
  constructor(private clienteService : ClienteService,
              private router : Router) {}


  ngOnInit(): void {
  }

//Método de crear cliente en el formulario.
  public create(): void{
    //Usamos aqui ese objeto creando uno nuevo en el formulario.
    this.clienteService.create(this.cliente).subscribe(
      //Redirigimos a la página con todos los clientes
      //cada vez que se cree uno nuevo.
      response => this.router.navigate(["/clientes"])
    )
  }

}
