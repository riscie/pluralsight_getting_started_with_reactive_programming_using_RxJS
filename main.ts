import { Observable } from "rxjs";

let visitors = ["Namita", "Amit", "Rohit", "Neetika"];
let source = Observable.from(visitors)
    .map(v => Observable.of('Hello ' + v));

source.mergeAll()
    .subscribe(v => console.log(v));

/* Output:
    Hello Namita
    Hello Amit
    Hello Rohit
    Hello Neetika
 */

