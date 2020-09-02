import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { RestaurantAdd, RestaurantRemove, RestaurantList } from './../actions/restaurant.actions';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  allFavorites: any;
  searchData =  {
    searchField : '',
    searchText : '',
    city : 'toronto',
    page : 1
  };
  restaurants = [];
  responseData: any;

  constructor(private store: Store<{restaurants: Observable<any[]>}>, private restaurantService: RestaurantService) {  }

  ngOnInit(): void {
    this.store.pipe(select('restaurants')).subscribe(values => {
      console.log(values);
      this.allFavorites = values;
    });
  }

  searchRestaurant() {
    this.searchData.page = 1;
    this.restaurants = [];
    this.loadRestaurants();
  }

  clearRestaurant() {
    this.restaurants = [];
  }

  loadRestaurants() {
    this.restaurantService.getRestaurants(this.searchData).subscribe(data => {
      this.responseData = data;
      this.restaurants = this.restaurants.concat(this.responseData.restaurants);
      this.searchData.page++;
      console.log(this.store.dispatch(new RestaurantList([])));
    });
  }

  addToFavorite(restaurant) {
    this.store.dispatch(new RestaurantAdd(restaurant));
  }

  alreadyAdded(restaurant) {   
    return this.allFavorites.some(fav => fav.id === restaurant.id);
  }
}
