import { Observable } from "rxjs";

let numbers = [1, 2, 40, 66, 98];
let source = Observable.from(numbers);

source.subscribe(
    value => console.log(`value: ${value}`),
    err => console.log(`error: ${err}`),
    () => console.log('complete')
);