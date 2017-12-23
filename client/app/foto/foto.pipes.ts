import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})

export class FiltroPorTitulo implements PipeTransform{
    transform(fotos: FotoComponent[], digitado: string){
        let filtro: string = digitado ? digitado.toLocaleLowerCase() : '';
        return filtro ? 
              fotos.filter(
                  foto => foto.titulo.toLocaleLowerCase().indexOf(filtro) != -1) : 
               fotos;
    }
}