import { useReducer } from 'react';

import TestReducer from './testReducer';
import TestContext from './testContext';

const TestState = (props) => {
  const initialState = {
    test: '',
  };

  const [state, dispatch] = useReducer(TestReducer, initialState);

  return (
    <TestContext.Provider value={{ test: state.test }}>
      {props.children}
    </TestContext.Provider>
  );
};

export default TestState;
