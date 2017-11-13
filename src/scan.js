/* eslint no-console: "off" */
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/scan';

const mySubject = new Subject();
const myCounter = mySubject
  .scan(count => count + 1, 0);
myCounter.subscribe({
  next: o => console.log(o),
});
mySubject.next();
mySubject.next();
mySubject.next();
