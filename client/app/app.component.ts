import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,    
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent{
    
    // array do tipo object
    fotos:Object[] = [];

    /**
     * Cria instância
     */
    constructor(http: Http){

        // recebe lista de fotos
       http.get('/v1/fotos')
            .map(res => res.json())
            .subscribe(
                fotos => {this.fotos = fotos; console.log("FOTOS: ",this.fotos)},
                erro => console.log("ERRO: ",erro)
            );
        
    }


}