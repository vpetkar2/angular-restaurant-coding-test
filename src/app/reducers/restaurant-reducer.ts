import { RetaurantActionTypes } from "./../shared/enum/restaurant-action-types.enum";
import { RestaurantAction } from "./../actions/restaurant.actions";

export const initialRestaurantState = [];

export function RestaurantReducer(state = initialRestaurantState, action: RestaurantAction) {

  switch (action.type) {
    case RetaurantActionTypes.List:
      return [...state];
    
    case RetaurantActionTypes.Add:
      const exist = state.some(rest => rest.id === action.payload.id);
      if (exist) {
        return [...state];
      } else {
        return [...state, action.payload];
      }

    case RetaurantActionTypes.Remove:
      var copy = Array.from(state);
      [...copy.splice(action.payload, 1)];
      state = copy;
      return [...state];

    default: return state;
  }

}