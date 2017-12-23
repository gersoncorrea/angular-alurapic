import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {FotoService} from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})


/**
 * Classe para listagem de fotos
 */
export class ListagemComponent{
    // fotos: Object[] = [];

    fotos: FotoComponent[] = []

    constructor( /*http: Http*/ service: FotoService){
        /**
         * Retorna fotos do servidor
         */
        // http.get('v1/fotos')
        // .map(res => res.json())
        // .subscribe(
        //     fotos => {this.fotos = fotos; console.log(fotos)},
        //     erro => console.log(erro)
        // )
        
        service.lista()
        .subscribe(
            fotos => this.fotos = fotos,
            erro => console.log(erro)
        )
    }
}