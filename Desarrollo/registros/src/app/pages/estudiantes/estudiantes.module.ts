import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { EstudiantesComponent } from './estudiantes.component';


const routes: Routes = [
  {path: '', component: EstudiantesComponent}
];


@NgModule({
  declarations: [
    EstudiantesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class EstudiantesModule { }
