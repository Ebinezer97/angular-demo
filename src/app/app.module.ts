import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE  } from '@angular/material/core';
//import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import {MatButtonModule} from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { LoginComponent } from './login/login.component';
import {MatRadioModule} from '@angular/material/radio';
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY', // Format for input parsing
  },
  display: {
    dateInput: 'DD/MM/YYYY', // Format displayed in input field
    monthYearLabel: 'MMM YYYY', // Label format in month/year selector
    dateA11yLabel: 'LL', // Accessibility format for date
    monthYearA11yLabel: 'MMMM YYYY' // Accessibility for month/year picker
  }
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutmeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,MatRadioModule,
    BrowserAnimationsModule,MatDatepickerModule,MatFormFieldModule,MatInputModule,
    MatNativeDateModule,MatSelectModule,MatToolbarModule,MatIconModule,MatButtonModule
  ],
  providers: [ { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    // {provide:MAT_FORM_FIELD_DEFAULT_OPTIONS,
    //    useValue:{appearance:'fill',subscriptSizing:'dynamic'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
