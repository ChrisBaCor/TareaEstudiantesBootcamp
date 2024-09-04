import { Component } from '@angular/core';

interface Estudiante {
  id: string;
  Nombres: string;
  Apellidos:string;
  dob: string;
  Curso: string;
}

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})

export class EstudiantesComponent {

   estudiante : Estudiante = {
    id: '',
    Nombres: '',
    Apellidos: '',
    dob: '',
    Curso: ''
  };

  estudiantes: Estudiante[] = [];

  addStudent() {
    this.estudiantes.push({ ...this.estudiante });
    console.log('Estudiantes:', JSON.stringify(this.estudiantes));
    this.clearForm();
  }

  clearForm() {
    this.estudiante = {
      id: '',
      Nombres: '',
      Apellidos: '',
      dob: '',
      Curso: ''
    };
  }
}
