export const createTest = (test) => {
  return (dispatch, getState) => {
    dispatch({type: 'CREATE_TEST', test});
  }
}