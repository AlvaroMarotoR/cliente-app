import { Component, OnInit } from '@angular/core';
import {Cliente} from './../cliente'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente()
  public titulo: String = "Crear Cliente"
  constructor() { }

  ngOnInit(): void {
  }

  public create(): void{
    console.log("Has hecho click")
    console.log(this.cliente)
  }

}
