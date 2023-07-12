import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { FilterPipe } from 'src/app/pipes/filter/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { FieldErrorComponent } from './field-error/field-error.component';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToastrComponent } from './toastr/toastr.component';
import { AccordionResultComponent } from './accordion-result/accordion-result.component';
import { ViewModalComponent } from './view-modal/view-modal.component';

@NgModule({
  declarations: [
    DeleteModalComponent,
    PageNotFoundComponent,
    NavigationComponent,
    FilterPipe,
    FieldErrorComponent,
    NavHomeComponent,
    SpinnerComponent,
    ToastrComponent,
    AccordionResultComponent,
    ViewModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule
  ],
  exports: [
    DeleteModalComponent,
    PageNotFoundComponent,
    NavigationComponent,
    NavHomeComponent,
    SpinnerComponent,
    ToastrComponent,
    FieldErrorComponent,
    AccordionResultComponent,
    ViewModalComponent,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FilterPipe,
    NgxPaginationModule,
    RouterModule
  ]
})
export class SharedModule { }
