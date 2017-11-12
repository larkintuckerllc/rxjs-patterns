/* eslint no-console: "off" */
import { Observable } from 'rxjs/Observable';

const myObservable = Observable.create((observer) => {
  const intervalID = setInterval(() => {
    observer.next('hi');
  }, 1000);
  return () => {
    clearInterval(intervalID);
  };
});
const mySubscription = myObservable.subscribe(o => console.log(o));
setTimeout(() => mySubscription.unsubscribe(), 5000);
