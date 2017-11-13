/* eslint no-console: "off" */
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/scan';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
const myStore = (new Subject())
  .scan(reducer, 0);
myStore.subscribe({
  next: o => console.log(o),
});
myStore.next({
  type: 'INCREMENT',
});
myStore.next({
  type: 'INCREMENT',
});
myStore.next({
  type: 'DECREMENT',
});
