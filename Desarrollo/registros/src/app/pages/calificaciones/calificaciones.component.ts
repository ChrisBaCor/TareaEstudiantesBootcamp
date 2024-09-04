import { Component } from '@angular/core';

interface Calificaciones {
  Nombretarea: string;
  Descripciontarea: string;
  Fechadeinicio: string;
  Fechafin: string;
  Calificacion: number;
  Estado?: string;
}

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent {
  grades: Calificaciones[] = [];
  grade: Calificaciones = {
    Nombretarea: '',
    Descripciontarea: '',
    Fechadeinicio: '',
    Fechafin: '',
    Calificacion: 0
  };
  isModalOpen = false;
  isEditing = false;
  editIndex: number | null = null;

  openGradesModal() {
    this.isModalOpen = true;
    this.isEditing = false;
  }

  closeGradesModal() {
    this.isModalOpen = false;
    this.clearForm();
  }

  addGrade() {
    this.grade.Estado = this.grade.Calificacion >= 7 ? 'Aprobado' : 'Reprobado';
    this.grades.push({ ...this.grade });
    console.log('Calificaciones:', JSON.stringify(this.grades));
    this.closeGradesModal();
  }

  deleteGrade(index: number) {
    this.grades.splice(index, 1);
    console.log('Calificación eliminada:', JSON.stringify(this.grades));
  }

  openEditModal(index: number) {
    this.editIndex = index;
    this.grade = { ...this.grades[index] };
    this.isModalOpen = true;
    this.isEditing = true;
  }

  saveEditedGrade() {
    if (this.editIndex !== null) {
      this.grade.Estado = this.grade.Calificacion >= 7 ? 'Aprobado' : 'Reprobado';
      this.grades[this.editIndex] = { ...this.grade };
      console.log('Calificación actualizada:', JSON.stringify(this.grades));
      this.closeGradesModal();
    }
  }

  clearForm() {
    this.grade = {
      Nombretarea: '',
      Descripciontarea: '',
      Fechadeinicio: '',
      Fechafin: '',
      Calificacion: 0
    };
    this.editIndex = null;
  }
}
