import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product/product-item';
import { ConvertCharactorIntoSpace } from './shared/ConvertCharactorIntoSpace.pipe';
import { StarStyleComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './products/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ConvertCharactorIntoSpace,
    StarStyleComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
