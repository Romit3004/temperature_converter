let number = document.getElementById("number") ;
let temperature = null ;

function convertTemp() {
    let temperature = document.getElementById("text").value ;
    let convertFrom = document.getElementById("options") ;
    let convertInto = document.getElementById("conversion") ;

    if (convertFrom.value == "degree" && convertInto.value == "Fahrenheit"){
        let result = Math.round(((temperature*(9/5)) + 32)) ;
        document.querySelector(".result").innerHTML = result + "&degF"; 
    }

    if (convertFrom.value == "fahrenheit" && convertInto.value == "Degree"){
        let result = Math.round(((temperature-32) * (5/9))) ;
        document.querySelector(".result").innerHTML = result + "&degC";
    }

    if (convertFrom.value == "degree" && convertInto.value == "Degree"){
        let result = temperature ;
        document.querySelector(".result").innerHTML = result + "&degC"; 
    }

    if (convertFrom.value == "fahrenheit" && convertInto.value == "Fahrenheit"){
        let result = temperature ;
        document.querySelector(".result").innerHTML = result + "&degF";
    }
}



