import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SetupModule } from './setup/setup.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    ClarityModule,
    FontAwesomeModule,
    SetupModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
