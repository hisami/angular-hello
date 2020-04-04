import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { counterReducer, featureName } from './reducers/counter.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppComponent } from './app.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { CounterComponent } from './components/counter/counter.component';
import { HelloButtonComponent } from './components/hello-button/hello-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    CounterComponent,
    HelloButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ [featureName]: counterReducer }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
