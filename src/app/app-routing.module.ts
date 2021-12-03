import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './pages/Page/page.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { BackComponent } from './pages/back/back.component';



const routes: Routes = [
{path: '', component: BackComponent},
//{path: '', loadChildren: () => import ('./pages/back/back.component').then(m => m.BackComponent)},
{path: 'login', component: PageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
