const CalculateTemp = () => {

const numberTemp=document.getElementById('temperture').value;
const tempSelected=document.getElementById('tempselector');
const valueTemp = tempselector.options[tempSelected.selectedIndex].value;

const celToFah = (cal) =>{
    let fahrenheit=Math.round((cal*9/5)+32);
    return fahrenheit;
}

const fahToCel = (fah) => {
    let celcius=Math.round((fah-32)*5/9);
    return celcius;
}

let result;

if(valueTemp == 'cal'){
    result=celToFah(numberTemp);
    document.getElementById('resultContainer').innerHTML=result+"°Fahrenheit ";
}
else{
    result=fahToCel(numberTemp);
    document.getElementById('resultContainer').innerHTML=result+"°Celsius";
}






}