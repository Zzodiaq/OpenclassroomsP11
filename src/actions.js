export const userConnected = (username) => {
    return {
      type: 'USER_CONNECTED',
      payload: { username }
    };
  };

export const userSignOut = () => {
    return {
      type: 'USER_SIGN_OUT',
    };
  };

export const updateUsername = (newUsername) => {
  return {
    type: 'UPDATE_USERNAME',
    payload: { newUsername },
  };
};