import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorComponent } from './visitor/visitor.component';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './visitors/create/create.component';
import { EditComponent } from './visitors/edit/edit.component';

import { VisitorService } from './visitor.service';

@NgModule({
  declarations: [
    AppComponent,
    VisitorComponent,
    HeaderComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [VisitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
