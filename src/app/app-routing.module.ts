import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECOPerioperatorioComponent } from './eco-perioperatorio/eco-perioperatorio.component';

const routes: Routes = [
  {
    path: '',
    component: ECOPerioperatorioComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
