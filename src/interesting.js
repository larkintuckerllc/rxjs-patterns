/* eslint no-console: "off" */
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

const myObservable = Observable.create((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
});
const mySubject = new Subject();
mySubject.subscribe({
  next: o => console.log(`observer A: ${o}`),
});
mySubject.subscribe({
  next: o => console.log(`observer B: ${o}`),
});
myObservable.subscribe(mySubject);
