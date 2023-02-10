import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GmbtViewModule } from '@gmbt-angular/components';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({}), EffectsModule.forRoot([]), GmbtViewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
