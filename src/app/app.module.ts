import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { TableComponent } from './components/table/table.component';
import { BeerDetailsComponent } from './components/beer-details/beer-details.component';
import {TableModule} from "primeng/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import { CustomSpinnerComponent } from './components/custom-spinner/custom-spinner.component';
import {DataViewModule} from "primeng/dataview";
import {CardModule} from "primeng/card";


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BeerDetailsComponent,
    CustomSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    BrowserAnimationsModule,
    ProgressSpinnerModule,
    DataViewModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
