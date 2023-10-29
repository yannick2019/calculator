import { calculate } from "./script";


const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", () => calculate(button)));


