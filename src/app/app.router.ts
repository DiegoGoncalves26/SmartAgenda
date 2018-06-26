import { TelacadastroComponent } from './telacadastro/telacadastro.component';
import { TelaloginComponent } from './telalogin/telalogin.component';
import { Routes, RouterModule } from '@angular/router';
import { TelauserComponent } from './telauser/telauser.component';
const routes: Routes = [
    {
        path: '',
        component: TelaloginComponent
    },
    {
        path: 'cadastro',
        component: TelacadastroComponent
    },
    {
      path: 'user',
      component: TelauserComponent
  }
];
export const RoutingModule = RouterModule.forRoot(routes);
