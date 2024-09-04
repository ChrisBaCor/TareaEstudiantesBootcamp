import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'Estudiantes', loadChildren: () => import('./pages/estudiantes/estudiantes.module').then(m => m.EstudiantesModule) },
  { path: 'Representantes', loadChildren: () => import('./pages/representantes/representantes.module').then(m => m.RepresentantesModule) },
  { path: 'Calificaciones', loadChildren: () => import('./pages/calificaciones/calificaciones.module').then(m => m.CalificacionesModule) },
  //{ path: '', redirectTo: '/Estudiantes', pathMatch: 'full' }, // Redirigir a 'Estudiantes' por defecto
  { path: '**', redirectTo: '/Inicio' } // Redirigir rutas no encontradas a 'Inicio'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
