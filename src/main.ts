import { sayHello } from './greet';

function showHello(id: string, name: string) {
    const elem = document.getElementById(id);
    elem.innerText = sayHello(name);
}

showHello("greeting", "TypeScript");