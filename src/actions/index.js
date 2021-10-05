import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchUser = () => async dispatch => {
  const response = await jsonPlaceholder.get('/users');

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
