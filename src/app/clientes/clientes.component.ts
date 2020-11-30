import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service'

//CONTROLADOR
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

//AL inicciarse el componente
  ngOnInit(): void {
    //Metemos en la variable, ese archivo JSON en un aarchivo externo
    ///, en vez de rellenarlo en el componente.

    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

}
