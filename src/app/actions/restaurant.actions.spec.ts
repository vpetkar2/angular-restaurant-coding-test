import * as fromRestaurant from './restaurant.actions';

describe('loadRestaurants', () => {
  it('should return an action', () => {
    expect(fromRestaurant.loadRestaurants().type).toBe('[Restaurant] Load Restaurants');
  });
});
