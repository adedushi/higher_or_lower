// const { default: Example } = require("./scripts/example");
import Example from "./scripts/example";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new Example(main);
    console.log("hello world");
});