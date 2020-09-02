import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { RestaurantRemove } from './../actions/restaurant.actions';
import { Location } from '@angular/common';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  restaurants: any;
  constructor(private store: Store<{restaurants: Observable<any[]>}>, private location: Location) { }

  ngOnInit(): void {
    this.store.pipe(select('restaurants')).subscribe(values => {
      this.restaurants = values;
      console.log(this.restaurants);
    });
  }

  removeRestaurant(index: number) {
    this.store.dispatch(new RestaurantRemove(index));
  }

  goBack() {
    this.location.back();
  }
}
