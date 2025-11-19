import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';   // ✔ IMPORTANTE

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MovieModule } from './movie/movie.module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    MovieModule
  ],
  providers: [],       
  bootstrap: [App],
})
export class AppModule {}
