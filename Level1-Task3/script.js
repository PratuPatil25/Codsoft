const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click',handleClick);
});

function handleClick(event){
    const buttonText = event.target.textContent;
     
    if (buttonText === 'C') {
        display.value = '';
      } else if (buttonText === '='){
        try{
            display.value = eval(display.value); 
        } catch (error){
            display.value = 'Error';
        }
      } else {
        display.value += buttonText;
      }
}