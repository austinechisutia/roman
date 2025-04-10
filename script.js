
const romanNumber = [
    {num:1000, roman: "M"},
    {num:900, roman: "CM"},
    {num:500, roman: "D"},
    {num:400, roman: "CD"},
    {num:100, roman: "M"},
    {num:90, roman: "XM"},
    {num:50, roman: "L"},
    {num:40, roman: "XL"},
    {num:10, roman: "X"},
    {num:9, roman: "IX"},
    {num:5, roman: "V"},
    {num:4, roman: "IV"},
    {num:1, roman: "I"},

]

const number = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const output = document.getElementById("output")



convertBtn.addEventListener("click", function() {
    const numberInput = number.value.trim()

    if(numberInput===""){
        output.textContent = 'Add a number'
    } else if(numberInput<0){
        output.textContent = 'Add a number more than 0'
    } else {
        let romanStore = '';
        let numeral = numberInput
        
        for(let i = 0; i<romanNumber.length; i++){
            while(numeral>=romanNumber[i].num){
                romanStore+=romanNumber[i].roman;
                numeral-=romanNumber[i].num
            }
        }
        output.textContent = romanStore
    }
})