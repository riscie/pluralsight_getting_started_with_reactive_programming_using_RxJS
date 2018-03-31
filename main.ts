import { Observable } from "rxjs";

let numbers = [1, 2, 40, 66, 98];
let source = Observable.create(observer => {
    let index = 0;
    let produceValue = () => {
        observer.next(numbers[index++]);
        if (index < numbers.length) {
            setTimeout(produceValue, 2000)
        } else {
            observer.complete();
        }
    };
    produceValue();
});


source.subscribe(
    value => console.log(`value: ${value}`),
    err => console.log(`error: ${err}`),
    () => console.log('complete')
);