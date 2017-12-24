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
    service: FotoService;
    mensagem: string = '';

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
        
        this.service = service;
        this.service
        .lista()
        .subscribe(
            fotos => this.fotos = fotos,
            erro => console.log(erro)
        )
    }

    remove(foto: FotoComponent){
        this.service
        .remove(foto)
        .subscribe(
            () => {
                let novasFotos = this.fotos.slice(0);
                let indice = novasFotos.indexOf(foto);
                novasFotos.splice(indice,1);
                this.fotos = novasFotos;
                this.mensagem = 'Foto removida com sucesso'
            },
            erro => { 
                console.log(erro);                 
                this.mensagem = 'Não é possível remover'
            });
        }
}