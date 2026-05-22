import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { routes } from './app/app.routes';
import { MainLayoutComponent } from './app/layout/main-layout/main-layout';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),MainLayoutComponent
    
  ]
}).catch((err) => console.error(err));