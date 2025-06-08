let buttons = document.querySelectorAll('button');
let display = document.getElementById('display');
let string = '';
let arr = Array.from(buttons);

console.log(arr);
arr.forEach(e => {
    e.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
      // string += e.target.innerHTML;
      // display.value = string;
        if (e.target.innerHTML === 'AC') {
          string = "All Clear";
            display.value =string;
            
        }
        if (e.target.innerHTML == 'Del') {
            string = string.substring(0, string.length - 1);
            display.value = string;
            
        }
        else if (e.target.innerHTML == '=') {
            
            
            string = eval(string);
            display.value = string;
        }
else {
    string += e.target.innerHTML;
    display.value = string;
}    
            
            
    
    });
});