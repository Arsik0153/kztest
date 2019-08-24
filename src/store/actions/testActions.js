import { firestore } from '../../config/fbConfig'

export const createTest = (test) => {
  return (dispatch, getState, { getFirebase, getFireStore }) => {

    firestore.collection('tests').add({
      ...test,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_TEST', test});
    }).catch((err) => {
      dispatch({ type: 'CREATE_TEST_ERROR', err});
    });

    dispatch({type: 'CREATE_TEST', test});
  }
}