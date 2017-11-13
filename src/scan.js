/* eslint no-console: "off" */
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/scan';

const mySubject = new Subject();
const myCounter = mySubject
  .scan((o, v) => o + v, 0);
myCounter.subscribe({
  next: o => console.log(o),
});
mySubject.next(1);
mySubject.next(2);
mySubject.next(3);
