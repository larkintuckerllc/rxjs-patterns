/* eslint no-console: "off" */
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/scan';

const counter = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
const mySubject = new Subject();
const myCounter = mySubject
  .scan(counter, 0);
myCounter.subscribe({
  next: o => console.log(o),
});
mySubject.next({
  type: 'INCREMENT',
});
mySubject.next({
  type: 'INCREMENT',
});
mySubject.next({
  type: 'DECREMENT',
});
