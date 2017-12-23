import {Component} from '@angular/core';
import {Http} from '@angular/http';


@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})

/**
 * Classe para listagem de fotos
 */
export class ListagemComponent{
    fotos: Object[] = [];


    constructor(http: Http){
        /**
         * Retorna fotos do servidor
         */
        http.get('v1/fotos')
        .map(res => res.json())
        .subscribe(
            fotos => {this.fotos = fotos; console.log(fotos)},
            erro => console.log(erro)
        )
    }
}