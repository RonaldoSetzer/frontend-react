import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  cities: [],
};

function forecast(state = initialState, action) {
  switch (action.type) {
    case '@forecast/ADD':
      return produce(state, draft => {
        const { city, forecasts } = action;
        const index = draft.cities.findIndex(f => f.city === city);

        if (index >= 0) {
          draft.cities[index].forecasts = forecasts;
        } else {
          draft.cities.unshift({
            id: uuidv4(),
            city,
            forecasts,
          });
        }
      });

    default:
      return state;
  }
}

export default forecast;
