import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { IConfig } from 'ngx-mask';
import { provideEnvironmentNgxMask, provideNgxMask } from 'ngx-mask/lib/ngx-mask.providers';
import { NgxMaskDirective } from 'ngx-mask/lib/ngx-mask.directive';
import { NgxMaskPipe } from 'ngx-mask/lib/ngx-mask.pipe';
const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgxPaginationModule,
    NgxSpinnerModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideNgxMask(maskConfig),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
