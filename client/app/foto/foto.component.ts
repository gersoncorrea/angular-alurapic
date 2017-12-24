import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css'],
    encapsulation: ViewEncapsulation.Emulated
    
})

export class FotoComponent {
    /**
     * Recebe valores de titulo e url
     */
    @Input() titulo: string = '';
    @Input() url: string = '';
    descricao: string = '';
    _id: string;
}