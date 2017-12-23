import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html'
})

export class FotoComponent {
    /**
     * Recebe valores de titulo e url
     */
    @Input() titulo: string = '';
    @Input() url: string = '';
    descricao: string = '';
}