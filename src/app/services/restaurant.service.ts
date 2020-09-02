import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurantData: any;

  constructor(private http: HttpClient) { }

  getRestaurants(searchObj: any) {
    const url = encodeURI('http://opentable.herokuapp.com/api/restaurants?city=' + searchObj.city + '&page=' + searchObj.page + '&' + searchObj.searchField + '=' + searchObj.searchText + '&per_page=100');
    console.log(url);
    return this.http.get(url);
  }

}
