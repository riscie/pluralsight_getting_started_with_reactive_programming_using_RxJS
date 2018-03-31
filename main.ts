import { Observable } from "rxjs";

let numbers = [1, 2, 40, 66, 98];
let source = Observable.create(observer => {
    for (let n of numbers) {
        observer.next(n);
    }
    observer.complete();
});


source.subscribe(
    value => console.log(`value: ${value}`),
    err => console.log(`error: ${err}`),
    () => console.log('complete')
);