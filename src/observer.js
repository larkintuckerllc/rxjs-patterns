/* eslint no-console: "off" */
import { Observable } from 'rxjs/Observable';

const myObservable = Observable.create((observer) => {
  console.log('Hello');
  observer.next(1);
  observer.next(2);
  observer.next(3);
});
myObservable.subscribe({
  next: o => console.log(o),
  error: err => console.log(err),
  complete: () => console.log('complete'),
});
myObservable.subscribe({
  next: o => console.log(o),
  error: err => console.log(err),
  complete: () => console.log('complete'),
});
