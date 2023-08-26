const calculateTemp=()=>{
    const numberTemp=document.getElementById('temp').value;
    let choice1=document.getElementById("temp_diff1");
    let val1=choice1.selectedIndex;
    let choice2=document.getElementById("temp_diff2");
    let val2=choice2.selectedIndex;
    if(val1===val2)
    {
        var result=numberTemp;
        document.getElementById("result").innerHTML= "= "+ result + temp_diff1.children[val1].innerHTML;
    }
    else if(val1===0&&val2===1)
    {
        var result=(9/5)*(numberTemp)+32;
        document.getElementById("result").innerHTML= "= "+result + " Fahrenheit";
    }
    else if(val1===0&&val2===2)
    {
        var result=(1/1)*(numberTemp)+273.15;
       
        document.getElementById("result").innerHTML= "= "+ result + " Kelvin";
    }
   else if(val1===1&&val2===0)
    {
        var result=(5/9)*(numberTemp-32);
        document.getElementById("result").innerHTML= "= "+result + " Celsius";
    }
    else if(val1===1&&val2===2)
    {
        var result=(5/9)*(numberTemp-32)+273.15;
        document.getElementById("result").innerHTML= "= "+ result + " Kelvin";
    }
    else if(val1===2&&val2===0)
    {
        var result=(1/1)*(numberTemp)-273.15;
        document.getElementById("result").innerHTML= "= "+result + " Celsius";
    }
    else if(val1===2&&val2===1)
    {
        var result=(9/5)*(numberTemp-273.15)+32;
        document.getElementById("result").innerHTML= "= "+ result + " Fahrenheit";
    }


}

const clearTemp=()=>{
    document.getElementById('temp').value="";
    document.getElementById("result").innerHTML="";
}