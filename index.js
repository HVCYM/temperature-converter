'use strict';
const input = document.querySelector('.main__container-input');
const output = document.querySelector('.output');
const option = document.querySelector('.main__container-options');
const submitButton = document.querySelector('.main__container-submit');

submitButton.addEventListener('click', (event) => {
   let ans = 0;
   const data = input.value;
   console.log(data);
   if(option.value === "1") ans = data * 9 / 5 + 32;
   else ans = (data - 32) * 5 / 9;
   console.log(ans);
   output.value = ans;
});
