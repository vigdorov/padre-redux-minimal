import * as A from './actions';

export const addElement = (payload) => {
  return {
    type: A.ADD_ELEMENT,
    payload
  };
};

export const deleteElement = () => {
  return {
    type: A.DELETE_ELEMENT,
    payload: null
  };
};

export const editElement = (payload, index) => {
  return {
    type: A.EDIT_ELEMENT,
    payload: payload,
    index: index,
  };
};
