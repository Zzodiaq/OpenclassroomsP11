import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  connected: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_CONNECTED':
      console.log(state)
      return {
        ...state,
        connected: true,
      };
    default:
      console.log(state)
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer, // Utilisez votre rootReducer ici
  devTools: process.env.NODE_ENV !== 'production',
});

