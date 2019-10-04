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
      console.log("list", list);
      return { ...store, list };
    }
    case A.DELETE_ELEMENT: {
      const list = [ ...store.list ];
      if (list.length) {
        list.pop();
      }
      return { ...store, list };
    }
    case A.EDIT_ELEMENT: {
      const list = [...store.list];
      const item = action.payload;
      const i = action.index;
      list[i] = item;
      console.log("list", list, 'index', i);
      return { ...store, list };
    }
    default: {
      return { ...store };
    }
  }
};

