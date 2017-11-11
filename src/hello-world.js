/* eslint no-console: "off" */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

const myArray = [1, 2, 3];

// NORMAL
console.log('Normal');
const myNewArray = myArray.map(o => `${o.toString()} + !!!`);
myNewArray.map(o => console.log(o));

// RXJS
console.log('RxJS');
const myObservable = Observable.from(myArray).map(o => `${o.toString()} + !!!`);
myObservable.subscribe(o => console.log(o));
