/* eslint no-console: "off" */
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const myBehSubject = new BehaviorSubject(1);
myBehSubject.subscribe({
  next: o => console.log(`observer A: ${o}`),
});
myBehSubject.next(2);
myBehSubject.next(3);
myBehSubject.subscribe({
  next: o => console.log(`observer B: ${o}`),
});
myBehSubject.next(4);
myBehSubject.next(5);
