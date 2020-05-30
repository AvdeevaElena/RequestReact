import {connectRef} from '../config/firebase';
import {FETCH_ALL} from './types';

export const addToDo = newToDo => async dispatch => {
    connectRef.push().set(newToDo);
};



export const completeToDo = completeToDoId => async dispatch => {
  connectRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
    connectRef.on("value", snapshot => {
    dispatch({
      type: FETCH_ALL,
      payload: snapshot.val()
    });
  });
};