import { Observable, Observer } from "rxjs";

let numbers = [1, 2, 40, 66, 98];
let source = Observable.from(numbers);

class MyObserver implements Observer<number> {
    next(value) {
        console.log(`value: ${value}`);
    }

    error(err) {
        console.log(`error: ${err}`);
    }

    complete() {
        console.log('complete');
    }
}

source.subscribe(new MyObserver());