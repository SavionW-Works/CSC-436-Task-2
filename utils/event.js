import { add } from "./math";
import { multi } from "./math";
const eventHandler = () => {

    const addButton = document.getElementById('add'); 
    const multiplyButton = document.getElementById('multiply');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const result = document.getElementById('result');
    
    const addNums = () => {
        var ans = add(number1.value,number2.value);
        
        if (!ans) { //Checks if ans is NaN
            result.innerHTML = "Error! Parameter missing or not an int.";
        } 

        else { //Valid Answer
            result.innerHTML = 
            // parseInt(number1.value, 10)+parseInt(number2.value,10);
            "Addition = " + ans;
        }
    } 

    const multiplyNums = () => {
        
        var ans = multi(number1.value,number2.value);
        if (!ans) { //Checks if ans is NaN
            result.innerHTML = "Error! Parameter missing or not an int.";
        } 

        else { //Valid Answer
            result.innerHTML = 
            // parseInt(number1.value, 10)+parseInt(number2.value,10);
            "Multiplication = " + ans;
        }
        
    }

    addButton.addEventListener('click', addNums); 
    multiplyButton.addEventListener('click', multiplyNums);

}

export  {eventHandler};