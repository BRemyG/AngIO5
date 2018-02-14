import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExampleComponentComponent } from './example-component/example-component.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import {ProductServiceService} from "./product-service.service";
import {TimerService} from './timer.service';
import { TestBarComponent } from './test-bar/test-bar.component';
import { QuestionComponent } from './question/question.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentComponent,
    CompOneComponent,
    TestBarComponent,
    QuestionComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductServiceService, TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
