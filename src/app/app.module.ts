import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { DialogComponent } from './dialog/dialog.component';
import { AppRoutingModule } from './app-routing.module';

import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import { CollectionsComponent } from './collections/collections.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent,
    CollectionsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    AppRoutingModule,
    NgbRatingModule,
    MatTableModule,
    FormsModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
