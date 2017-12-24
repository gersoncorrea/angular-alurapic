import {Component, Input} from '@angular/core';
import { FotoComponent } from '../foto/foto.component'
import {Http, Headers} from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl:'./cadastro.component.html'
})

export class CadastroComponent {
    
    // tipando propriedade
    // foto: Object = {
    //     titulo:'',
    //     url:'',
    //     descricao:''
    // }

    foto: FotoComponent = new FotoComponent();
    service: FotoService;
    // http: Http;
    meuForm: FormGroup;
    mensagem: string = '';
    route: ActivatedRoute;
    router: Router;
    
    constructor(/*http: Http*/service: FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router){
        // this.http = http;
        this.router = router;
        this.route = route;
        this.service = service;
        this.meuForm = fb.group({
            titulo:['',Validators.compose(
                [Validators.required, Validators.minLength(4)]
            )],
            url:['',Validators.required],
            descricao:''
        })
        this.route.params.subscribe(
            params=>{
                console.log(params['id']) 
                let id = params['id'];

                if(id){
                    this.service.buscaPorId(id)
                    .subscribe(
                        foto => this.foto = foto,
                        erro => console.log(erro));
                }
            });
    }
    
    
    cadastrar(event){
        event.preventDefault();
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // this.http.post('v1/fotos',JSON.stringify(this.foto),{headers: headers})
        // .subscribe(()=>{
        //     this.foto = new FotoComponent();
        //     console.log('Foto salva com sucesso.')
        // },erro => console.log(erro));
        // console.log(this.foto)
    
        this.service.cadastra(this.foto)
        .subscribe(()=>{
            this.foto = new FotoComponent();
            this.router.navigate(['']);
            console.log('Foto salva com sucesso.')
        },erro => console.log(erro));
    }
}