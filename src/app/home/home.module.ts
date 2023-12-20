import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http"
import { HomeComponent } from "./home.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { ProductListComponent } from "./product-list/product-list.component";
import { AppLayoutModule } from "../layout/layout.module";

@NgModule({
      imports: [BrowserModule, BrowserAnimationsModule, ClarityModule, HttpClientModule, AppLayoutModule],
      declarations: [HomeComponent, ProductListComponent],
      exports: [HomeComponent]
})
export class HomeModule {}