// Usado para carregar AppModule
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

// Carrega módulo
platform.bootstrapModule(AppModule);