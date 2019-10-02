import { createStore } from 'redux';

const initState = 0;

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

function reducer (state = initState, action) {
  switch (action.type) {
    case INCREMENT: {
      return state + 1;
    }
    case DECREMENT: {
      return state - 1;
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log('STATE:', store.getState() );
});

store.dispatch({ type: '' });

store.dispatch({ type: INCREMENT });
