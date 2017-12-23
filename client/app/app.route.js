"use strict";
var router_1 = require('@angular/router');
var listagem_component_1 = require('./listagem/listagem.component');
var cadastro_component_1 = require('./cadastro/cadastro.component');
/**
 * Definição de rotas
 */
var appRoutes = [
    { path: '', component: listagem_component_1.ListagemComponent },
    { path: 'cadastro', component: cadastro_component_1.CadastroComponent },
    { path: '**', redirectTo: '' }
];
/**
 * Constroi rotas baseado na configuração definida
 */
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.route.js.map