import { el, mount } from "redom";

const hello = el("h1", "Hello world!");
console.log(document.body);
mount(document.body, hello);
