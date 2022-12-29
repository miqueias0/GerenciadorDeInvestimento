import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './login';
import { PlanilhaComponent } from './planilha/components';
import { RegistrarComponent } from './registrar';


const routes: Routes = [
  {path: 'login', component: ComponentsComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'planilha', component: PlanilhaComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
