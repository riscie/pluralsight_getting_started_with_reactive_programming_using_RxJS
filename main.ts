import { Observable } from "rxjs";

let circle = document.getElementById('circle');

let source = Observable.fromEvent(document, "mousemove")
    .map((e: MouseEvent) => ({x: e.clientX, y: e.clientY}))
    .filter(value => value.x < 500)
    .delay(300);

console.log(circle.style.left);

function onNext(value) {
    console.log(value);
    circle.style.left = `${value.x}px`;
    circle.style.top = `${value.y}px`;
}

source.subscribe(
    onNext,
    err => console.log(`error: ${err}`),
    () => console.log('complete')
);