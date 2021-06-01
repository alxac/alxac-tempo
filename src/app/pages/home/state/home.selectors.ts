import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from './home.reducer';

export const selectHomeState = createFeatureSelector('home');

export const selectCurrentWeather = createSelector(
  selectHomeState,
  (homeSate: HomeState) => homeSate.entity
);

export const selectCurrentWeatherLoading = createSelector(
  selectHomeState,
  (homeSate: HomeState) => homeSate.loading
);

export const selectCurrentWeatherError = createSelector(
  selectHomeState,
  (homeSate: HomeState) => homeSate.error
);
