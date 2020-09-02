import { Action } from '@ngrx/store';
import { RetaurantActionTypes } from "./../shared/enum/restaurant-action-types.enum";

export class RestaurantAction implements Action {
  type: string;
  payload: any;
}

export class RestaurantList implements RestaurantAction {
  public type = RetaurantActionTypes.List;
  constructor(public payload: any) {
  }
}

export class RestaurantAdd implements RestaurantAction {
  public type = RetaurantActionTypes.Add;
  constructor(public payload: any) {
  }
}

export class RestaurantRemove implements RestaurantAction {
  public type = RetaurantActionTypes.Remove;
  constructor(public payload: any) {
  }
}