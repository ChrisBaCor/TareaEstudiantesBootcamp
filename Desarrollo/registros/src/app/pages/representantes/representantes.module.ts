import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RepresentantesComponent } from './representantes.component';

const routes: Routes =[
  {path: '', component: RepresentantesComponent}
];

@NgModule({
  declarations: [
    RepresentantesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RepresentantesModule { }
