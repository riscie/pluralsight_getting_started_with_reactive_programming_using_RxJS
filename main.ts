import { Observable } from "rxjs";

let source = Observable.create(observer => {
    [1, 2, 3, 4]
        .map(n => n * (Math.random() * 2))
        .forEach((n, i) => {
            observer.next(`${i + 1}: ${n}`);
            if (n > 4) {
                const msg = "value > 4 not allowed!";
                console.error(msg);
                observer.error(msg);
            }
        });
    observer.complete();
});

source
    .retry(5)
    .subscribe(v => console.log(v),
        err => console.error(err),
        () => console.log('complete'));


