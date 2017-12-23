import {RouterModule, Routes} from '@angular/router';
import {ListagemComponent} from './listagem/listagem.component';
import {CadastroComponent} from './cadastro/cadastro.component';

/**
 * Definição de rotas
 */
const appRoutes: Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: '**', redirectTo:''}
]

/**
 * Constroi rotas baseado na configuração definida
 */
export const routing = RouterModule.forRoot(appRoutes);