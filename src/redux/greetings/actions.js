import Message from './services';

export const greetingsActions = () => (dispatch) => {
  Message().then((data) => {
    dispatch({
      type: 'SET_GREETING',
      payload: data.message,
    });
  });
};