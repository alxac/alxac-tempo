import { createAction, props } from "@ngrx/store";
import { Bookmark } from "src/app/shared/models/bookmark.model";

export const changeText = createAction(
    '[Home] Change Text',
    props<{ text: string }>(),
);

export const loadCurrentWeather = createAction(
    '[Home] Load Current Weather',
    props<{query: string}>(),
);

export const loadCurrentWeatherSuccess = createAction(
    '[Weather API] Load Current Weather Success',
    props<{entity: any}>(),
);

export const loadCurrentWeatherFailed = createAction(
    '[Weather API] Load Current Weather Failed',
);

export const clearHomeState = createAction(
    '[Home] Clear state',
);

export const toggleBookmark = createAction(
    '[Home] Toggle Bookmark',
    props<{ entity: Bookmark }>(),
  );