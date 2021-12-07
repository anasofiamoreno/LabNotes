import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './pages/page/page.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { BackComponent } from './pages/back/back.component';
import { RegisterComponent } from './pages/register/register.component';



const routes: Routes = [
{path: '', component: BackComponent},
{path: 'login', component: LogInComponent},
{path: 'register', component: RegisterComponent},
{path: 'notes', component: PageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
