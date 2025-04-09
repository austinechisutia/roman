const numbers = [
    {
        roman: 'M',
        value: 1000
    },
    {
    roman: 'CM',
    value: 900
},
{
    roman: 'D',
    value: 500
},
{
    roman: 'CD',
    value: 400
},
{
    roman: 'C',
    value: 100
},
{
    roman: 'XC',
    value: 90
},
{
    roman: 'L',
    value: 50
},
{
    roman: 'XL',
    value: 40
},
{
    roman: 'X',
    value: 10
},
{
    roman: 'IX',
    value: 9
},
{
    roman: 'V',
    value: 5
},
{
    roman: 'IV',
    value: 4
},
{
    roman: 'I',
    value: 1
}
]



// DOM Elements
const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const outputDiv = document.getElementById('output');


convertBtn.addEventListener('click', () => {
    const number = parseInt(numberInput.value);
    
    if(number === ""){
        outputDiv.textContent = "Please enter a number";
    } else if(number < 0 || number >= 4000){
        outputDiv.textContent = "Please enter a number between 0 and 4000";
    } else {
        let result = "";
        let num = number;
        
        for (let i = 0; i < numbers.length; i++) {
            while (num >= numbers[i].value) {
                result += numbers[i].roman;
                num -= numbers[i].value;

            }
        }
        
        outputDiv.textContent = result;
    }
});



