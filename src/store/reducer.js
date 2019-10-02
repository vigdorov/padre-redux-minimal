import * as A from './actions';

const initState = {
  list: [
    'привет',
    'пока',
  ],
};

export const reducer = (store = initState, action) => {
  switch(action.type) {
    case A.ADD_ELEMENT: {
      const list = [ ...store.list ];
      list.push( action.payload );
      return { ...store, list };
    }
    case A.DELETE_ELEMENT: {
      const list = [ ...store.list ];
      if (list.length) {
        list.pop();
      }
      return { ...store, list };
    }
    default: {
      return { ...store };
    }
  }
};

