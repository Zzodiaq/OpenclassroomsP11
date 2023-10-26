// reducers.js
const initialState = {
    connected: false,
    // Autres états globaux que vous pourriez avoir
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_CONNECTED':
        return {
          ...state,
          connected: true,
        };
      // Ajoutez d'autres cas pour d'autres actions si nécessaire
  
      default:
        return state;
    }
  };
  
  export default rootReducer;