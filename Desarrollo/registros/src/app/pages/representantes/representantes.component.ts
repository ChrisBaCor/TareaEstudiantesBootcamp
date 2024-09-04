import { Component } from '@angular/core';

interface Representante {
  NombreCompleto: string;
  Relacion: string;
  Telefono: string;
  Email?: string;
}

@Component({
  selector: 'app-representantes',
  templateUrl: './representantes.component.html',
  styleUrl: './representantes.component.css'
})
export class RepresentantesComponent {

  representante: Representante = {
    NombreCompleto: '',
    Relacion: '',
    Telefono: '',
    Email: ''
  };

  representantes: Representante[] = [];

  addRepresentative() {
    this.representantes.push({ ...this.representante });
    console.log('Representantes:', JSON.stringify(this.representantes));
    this.clearForm();
  }

  clearForm() {
    this.representante = {
      NombreCompleto: '',
      Relacion: '',
      Telefono: '',
      Email: ''
    };
  }
}
