/* eslint no-console: "off" */
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const mySubject = new BehaviorSubject(0);
mySubject.subscribe({
  next: o => console.log(`observerA: ${o}`),
});
mySubject.next(1);
mySubject.next(2);
mySubject.subscribe({
  next: o => console.log(`observerB: ${o}`),
});
mySubject.next(3);
