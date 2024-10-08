let Find22 = document.querySelector(".Find22"),
DegreeCell = document.querySelector("#DegreeCel"),
ConvertDegree = document.querySelector("#ConvertDeg"),
SubmitDeg = document.querySelector("#SubmitDegree");

SubmitDeg.addEventListener("click", () => {
    let valueofdegg = DegreeCell.value;
    if(valueofdegg == ''){
        ConvertDegree.innerText = "Plese Enter The Value of Degree Celsius";
        ConvertDegree.style.color = "red";
    }else if(valueofdegg == 0){
        ConvertDegree.innerText = "Degree Fahrenheit is = 32deg. F";
        ConvertDegree.style.color = "green";
    }else {
        DegreeFerenhiteis = (1.8 * valueofdegg) + 32;
        console.log(DegreeFerenhiteis);
        ConvertDegree.innerText = "Degree Fahrenheit is = "+DegreeFerenhiteis+" Deg. F";
        ConvertDegree.style.color = "green";
        DegreeCell.disabled = true;
        SubmitDeg.disabled = true;
        Find22.innerText = "Plese Refresh Page To More Convert"
    }
});

let Find23 = document.querySelector(".Find23"),
DegreeFer = document.querySelector("#DegreeFer"),
ConvertFer = document.querySelector("#ConvertFer"),
SubmitFer = document.querySelector("#SubmitFer");

SubmitFer.addEventListener("click", () => {
    let valueofFer = DegreeFer.value;
    if(valueofFer == ''){
        ConvertFer.innerText = "Plese Enter The Value of Degree Fer.";
        ConvertFer.style.color = "red";
    }else if(valueofFer == 0){
        ConvertFer.innerText = "Degree Fahrenheit is = -17.7778deg. F";
        ConvertFer.style.color = "green";
    }else {
        let DegreeCelciusis = (valueofFer - 32) * (5/9);
        console.log(DegreeCelciusis);
        ConvertFer.innerText = "Degree Fahrenheit is = "+DegreeCelciusis+" Deg. F";
        ConvertFer.style.color = "green";
        DegreeFer.disabled = true;
        SubmitFer.disabled = true;
        Find23.innerText = "Plese Refresh Page To More Convert";
    }
});


let Find24 = document.querySelector(".Find24"),
centemeter = document.querySelector("#Centemeter"),
Foot = document.querySelector("#foot"),
SubmitFoot = document.querySelector("#Submitcentemeter");

SubmitFoot.addEventListener("click", () => {
    let valueofcen = centemeter.value;
    if(valueofcen == 0){
        Foot.innerText = "Plese Enter The Value of centemeter.";
        Foot.style.color = "red";
    }else if(valueofcen < 0){
        Foot.innerText = "Invalid Length Plese enter Valid Length";
        Foot.style.color = "red";
    }else {
        let Footvalue = valueofcen / 30.48;
        console.log(Footvalue);
        Foot.innerText = "Degree Fahrenheit is = "+Footvalue+" Deg. F";
        Foot.style.color = "green";
        centemeter.disabled = true;
        SubmitFoot.disabled = true;
        Find24.innerText = "Plese Refresh Page To More Convert";
    }
});

let Find25 = document.querySelector(".Find25"),
Foot1 = document.querySelector("#Footval"),
centemeter11 = document.querySelector("#CenvertCentemeter"),
SubmitConvFoot = document.querySelector("#Submitcovercentemeter");

SubmitConvFoot.addEventListener("click", () => {
    let valueofFoot = Foot1.value;
    if(valueofFoot == 0){
        centemeter11.innerText = "Plese Enter The Value of Foot.";
        centemeter11.style.color = "red";
    }else if(valueofFoot < 0){
        centemeter11.innerText = "Invalid Length Plese enter Valid Length";
        centemeter11.style.color = "red";
    }else {
        let centemetervalue = valueofFoot * 30.48;
        console.log(centemetervalue);
        centemeter11.innerText = "Degree Fahrenheit is = "+centemetervalue+" Deg. F";
        centemeter11.style.color = "green";
        Foot1.disabled = true;
        SubmitConvFoot.disabled = true;
        Find25.innerText = "Plese Refresh Page To More Convert";
    }
});

let Find26 = document.querySelector(".Find26"),
Millimetre = document.querySelector("#Millimetre"),
Inch = document.querySelector("#CenvertInch"),
SubmitConvertInch = document.querySelector("#SubmitcovertInch");

SubmitConvertInch.addEventListener("click", () => {
    let valueofMillimetre = Millimetre.value;
    if(valueofMillimetre == 0){
        Inch.innerText = "Plese Enter The Value of Millimetre";
        Inch.style.color = "red";
    }else if(valueofMillimetre < 0){
        Inch.innerText = "Invalid Length Plese enter Valid Length";
        Inch.style.color = "red";
    }else {
        let Inchvalue = valueofMillimetre / 25.4;
        console.log(Inchvalue);
        Inch.innerText = "Degree Fahrenheit is = "+Inchvalue+" Deg. F";
        Inch.style.color = "green";
        Millimetre.disabled = true;
        SubmitConvertInch.disabled = true;
        Find26.innerText = "Plese Refresh Page To More Convert";
    }
});

let Find27 = document.querySelector(".Find27"),
Inchval = document.querySelector("#Inchval"),
Milimeterval = document.querySelector("#CenvertMillimetre"),
SubmitConvertmilliMetre = document.querySelector("#SubmitcovertMillimetre");

SubmitConvertmilliMetre.addEventListener("click", () => {
    let valueofInch = Inchval.value;
    if(valueofInch == 0){
        Milimeterval.innerText = "Plese Enter The Value of Inch";
        Milimeterval.style.color = "red";
    }else if(valueofInch < 0){
        Milimeterval.innerText = "Invalid Length Plese enter Valid Length";
        Milimeterval.style.color = "red";
    }else {
        let Millimetreval = valueofInch * 25.4;
        console.log(Millimetreval);
        Milimeterval.innerText = "Degree Fahrenheit is = "+Millimetreval+" Deg. F";
        Milimeterval.style.color = "green";
        Inchval.disabled = true;
        SubmitConvertmilliMetre.disabled = true;
        Find27.innerText = "Plese Refresh Page To More Convert";
    }
});