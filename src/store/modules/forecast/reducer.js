const initialState = {
  today: { label: 'TODAY', temperature: '38.7C' },
  tomorrow: { label: 'TOMORROW', temperature: '36.7C' },
  afertomorrow: { label: 'AFTER TOMORROW', temperature: '37.5C' },
};

function forecast(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default forecast;
