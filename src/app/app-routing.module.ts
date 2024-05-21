import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './componets/Auth/log-in/log-in.component';
import { RegistrComponent } from './componets/Auth/registr/registr.component';

const routes: Routes = [
  { path: "login", title: "login", component: LogInComponent},
  { path: "register", title: "register", component: RegistrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
