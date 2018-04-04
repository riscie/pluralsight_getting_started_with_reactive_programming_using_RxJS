import { Observable } from "rxjs";

const mockedFetch = (url) => {
    return Observable.create(observer => {
        const rand = (Math.floor(Math.random() * 8) + 1);
        if (rand === 1) {
            console.log('Server did hit 404');
            observer.error({statusCode: 404, status: "Not Found"});
        } else if (rand === 2) {
            console.log('Server responded correctly');
            observer.next({data: [1, 2, 3, 4]});
            observer.complete();
        }
        else {
            console.log('Server did hit 429');
            observer.error({statusCode: 429, status: "Too Many Requests"});
        }
    })
};

const retryWithDelayStrategy = (delay: number) => {
    return (errors) => errors
        .mergeMap((err) => {
            if (err.statusCode === 429) {
                console.log(`Error: ${err.statusCode}: ${err.status}`);
                console.log('Retry with delay!');
                console.log('');
                return Observable.of(err).delay(delay);
            } else {
                console.log(`Error: ${err.statusCode}: ${err.status}`);
                console.log('No retry!');
                return Observable.throw(err);
            }
        });
}

mockedFetch("http://someApi.com/contact/1")
    .retryWhen(retryWithDelayStrategy(500))
    .subscribe(
        res => console.log(res.data),
        err => console.error(err)
    );

/* Output example
Server did hit 429
Error: 429: Too Many Requests
Retry with delay!

Server did hit 429
Error: 429: Too Many Requests
Retry with delay!

Server responded correctly
(4) [1, 2, 3, 4]
*/
