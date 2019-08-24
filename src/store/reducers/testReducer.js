const initState = {
  tests: [
    {id: '0', name: 'UX design basics test', duration: 15, code: '0195', questionList: []},
    {id: '1', name: 'UI design basics test', duration: 5, code: '2645', questionList: []},
    {id: '2', name: 'Web development basics test', duration: 40, code: '4725', questionList: []},
    {id: '3', name: 'Software engineering basics test', duration: 20, code: '9143', questionList: []},
    {id: '4', name: 'Computer Science basics test', duration: 35, code: '3046', questionList: []}
  ]
};

const testReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_TEST":
      console.log(action.type);
      return state;
    case "CREATE_TEST_ERROR":
      console.log(action.type);
      return state;
    default:
      return state;
  }
}

export default testReducer;