const input = document.querySelector(".input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

button.addEventListener("click",()=>{
  const inputValue = input.value;
  const number = Number(inputValue)
  if (inputValue === "" || number < 1 || isNaN(number)){
    result.textContent = `Please enter valid number`
    input.value = "";
    return;
  }

  if (number === 1){
    result.textContent = `${number} is not a prime number`
    input.value = "";
    return;
  }

 let isPrime = true;
 for (let i = 2; i <= Math.sqrt(number); i++){
    if (number % i === 0){
        isPrime = false;
        break;
    }
 }

 if (isPrime){
    result.textContent = `${number} is a prime number`
 }else{
    result.textContent = `${number} is not a prime number`
 }
  input.value = "";

})