import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, 
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, 
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
  MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, 
  MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, 
  MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, 
  MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import 'hammerjs';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { STodoService } from './services/s-todo.service';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LabelsComponent } from './labels/labels.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    LabelsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, 
        MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
        MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, 
        MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
        MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, 
        MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, 
        MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, 
        MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, AppRoutingModule
  ],
  providers: [STodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
