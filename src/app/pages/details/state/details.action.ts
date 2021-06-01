import { createAction, props } from '@ngrx/store';

export const loadWeatherDetails = createAction(
  '[Details] Load Weather Details'
);

export const loadWeatherDetailsFailed = createAction(
  '[Details] Load Weather Details Failed'
);

export const loadWeatherDetailsSuccess = createAction(
  '[Details] Load Weather Details Success',
  props<{ entity: any }>()
);
