/* eslint no-console: "off" */
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/scan';

// BORROWED HEAVILY FROM REDUX
const combineReducers = (reducers) => {
  const reducerKeys = Object.keys(reducers);
  return (state, action) => {
    const nextState = {};
    let hasChanged = false;
    for (let i = 0; i < reducerKeys.length; i += 1) {
      const key = reducerKeys[i];
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
};
const counter1 = (state, action) => {
  switch (action.type) {
    case 'C1_INCREMENT':
      return state + 1;
    case 'C1_DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
const counter2 = (state, action) => {
  switch (action.type) {
    case 'C2_INCREMENT':
      return state + 1;
    case 'C2_DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
// TODO: HOW TO GET INTIAL ST
const mySubject = new Subject();
const myStore = mySubject
  .scan(combineReducers({
    counter1,
    counter2,
  }), {
    counter1: 0,
    counter2: 0,
  });
myStore.subscribe({
  next: o => console.log(o),
});
myStore.next({
  type: 'C1_INCREMENT',
});
myStore.next({
  type: 'C1_INCREMENT',
});
myStore.next({
  type: 'C1_DECREMENT',
});
myStore.next({
  type: 'C2_INCREMENT',
});
