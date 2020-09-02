import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';

import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
  declarations: [RestaurantsComponent, FilterPipe],
  imports: [
    FormsModule,
    CommonModule,
    RestaurantsRoutingModule
  ]
})
export class RestaurantsModule { }
