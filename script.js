let InputSquare = document.querySelector(".Inpute");
let Area = document.querySelector("#Area");
let submit = document.querySelector("#SubmitArea");
let Find = document.querySelector(".Find");

submit.addEventListener("click", () => {
    let inputvalu = InputSquare.value;
    if (inputvalu == 0){
        Area.innerText = "Plese enter length of Square."
        Area.style.color = "red";
    }else {
    // console.log(inputvalu);
    let AreaSquare = inputvalu * inputvalu;
    // console.log(AreaSquare);
    Area.innerText = `The Area Of Square Is = `+ AreaSquare + ` Q^2`;
    InputSquare.disabled = true;
    submit.style.backgroundColor = "black";
    submit.disabled = true;
    Find.innerText = `Plese Refresh to Calculate more`;
    Area.style.color = "Green";
    Find.style.color = "Brown";
    Area.style.backgroundColor = "white";
    }
    
});

let Length = document.querySelector("#Length");
let Breath = document.querySelector("#Breath");
let AreaRectangle = document.querySelector("#RectangleJS");
let SubmitRect = document.querySelector("#SubmitAreaRecJs");
let Find2 = document.querySelector(".Find2");

SubmitRect.addEventListener("click", () => {
    let lengthValu = Length.value;
    let BreathValue = Breath.value;
    if (lengthValu == 0) {
        AreaRectangle.innerText = `Plese enter value of Length`;
        AreaRectangle.style.color = "red";
    }else if (BreathValue == 0) {
        AreaRectangle.innerText = `Plese enter value of Breath`;
        AreaRectangle.style.color = "red";
    }else {
    // console.log(lengthValu);
    // console.log(BreathValue);
    let AreaofRec = lengthValu * BreathValue;
    // console.log(AreaofRec);
    AreaRectangle.innerText = `Area of Rectanle = `+ AreaofRec +` Q^2`;
    AreaRectangle.style.backgroundColor = "white";
    AreaRectangle.style.color = "green";
    Length.disabled = true;
    Breath.disabled = true;
    SubmitRect.disabled = true;
    Find2.innerText = `Plese Refresh to Re Calculate.`;
    SubmitRect.style.backgroundColor = "black";
    Find2.style.color = "brown";

    }
    
    
});

let Find3 = document.querySelector(".Find3"),
Trbase = document.querySelector("#LengthofBase"),
Trheight = document.querySelector("#LengthofHeight"),
AreaTr = document.querySelector("#TriangleJs"),
SubmitTr = document.querySelector("#SubmitAreaTriJs");

SubmitTr.addEventListener("click", () => {
    let BaseTrValue = Trbase.value;
    let heightTrValue = Trheight.value;
    if (BaseTrValue == 0) {
        AreaTr.innerText = `Plsese Enter The Value of base`;
        AreaTr.style.color = "red";
    }else if (heightTrValue == 0){
        AreaTr.innerText = `Plese enter the value of Height`;
        AreaTr.style.color = "red";
    }else {
    let AreaofTr = (1/2) * BaseTrValue * heightTrValue;
    AreaTr.innerText = `Area of Traingle = `+AreaofTr +` Q^2`;
    AreaTr.style.backgroundColor = "white";
    AreaTr.style.color = "green";
    Trbase.disabled = true;
    Trheight.disabled = true;
    SubmitTr.disabled = true;
    Find3.innerText = "Plese Refresh to Re Calculate.";
    Find3.style.color = "brown";
    SubmitTr.style.backgroundColor = "black";
    
    }
    
});

let Find4 = document.querySelector(".Find4"),
LengthCube = document.querySelector("#LengthofCube"),
AreaCube = document.querySelector("#CubeJs"),
SubmitCube = document.querySelector("#SubmitAreaCuiJs");

SubmitCube.addEventListener("click", () => {
    let LengthCbValu = LengthCube.value;
    if(LengthCbValu == 0){
        AreaCube.innerText = "Plese enter The length of cube";
        AreaCube.style.color = "red";
    }else {
        let AreaofCB = 6 * LengthCbValu * LengthCbValu;
        // console.log(AreaofCB);
        AreaCube.innerText = `Area of Cube = `+ AreaofCB + ` Q^2`;
        AreaCube.style.color = "green";
        AreaCube.style.backgroundColor = "white";
        Find4.innerText = "Plese Refresh to Re Calculate.";
        Find4.style.color = "brown";
        LengthCube.disabled = true;
        SubmitCube.disabled = true;
        SubmitCube.style.backgroundColor = "black";
        
    }

});

let Find5 = document.querySelector(".Find5"),
lengthofcuboid = document.querySelector("#LengthofCuboid"),
breathofcuboid = document.querySelector("#Breathofcuboid"),
heightofcuboid = document.querySelector("#Heightofcuboid"),
areaofcuboid = document.querySelector("#CuboidJs"),
submitofcuboid = document.querySelector("#SubmitAreaCuboidiJs");

submitofcuboid.addEventListener("click", () => {
    let lengthvalucuboid = lengthofcuboid.value;
    let breathvaluecuboid = breathofcuboid.value;
    let heightvaluecuboid = heightofcuboid.value;
    if (lengthvalucuboid == 0 && breathvaluecuboid == 0) {
        areaofcuboid.innerText = "Plese enter length and breath."
        areaofcuboid.style.color = "red";
    }else if (breathvaluecuboid == 0 && heightvaluecuboid == 0) {
        areaofcuboid.innerText = "Plese enter breath and height.";
        areaofcuboid.style.color = "red";
    }else if (lengthvalucuboid == 0 && heightvaluecuboid == 0) {
        areaofcuboid.innerText = "Plese enter length and height.";
        areaofcuboid.style.color = "red";
    }else if (lengthvalucuboid == 0) {
        areaofcuboid.innerText = "Plese enter length.";
        areaofcuboid.style.color = "red";
    }else if (breathvaluecuboid == 0) {
        areaofcuboid.innerText = "Plese enter breath.";
        areaofcuboid.style.color = "red";
    }else if (heightvaluecuboid == 0) {
        areaofcuboid.innerText = "Plese enter height.";
        areaofcuboid.style.color = "red";
    }else {
        let lMb = lengthvalucuboid * breathvaluecuboid;
        let bMh = breathvaluecuboid * heightvaluecuboid;
        let lMh = lengthvalucuboid * heightvaluecuboid;
        let AreaofCuboiIs = 2 * (lMb + bMh + lMh);
        // console.log(AreaofCuboiIs);
        areaofcuboid.innerText = `Area of Cuboid = `+ AreaofCuboiIs + ` Q^2`;
        areaofcuboid.style.backgroundColor = "white";
        areaofcuboid.style.color = "green";
        lengthofcuboid.disabled = true;
        breathofcuboid.disabled = true;
        heightofcuboid.disabled = true;
        submitofcuboid.disabled = true;
        submitofcuboid.style.backgroundColor = "black";
        Find5.innerText = "Plese Refresh to Re Calculate."
        Find5.style.color = "brown";
        
    }
});

let Find6 = document.querySelector(".Find6"),
RadiusofCircle = document.querySelector("#Radiusofcircle"),
AreaofCircleOf = document.querySelector("#Areaofcircle11"),
Submitofcircle = document.querySelector("#SubmitAreaCircleJs");

Submitofcircle.addEventListener("click", () => {
    let radiusValue = RadiusofCircle.value;
    if(radiusValue == 0) {
        AreaofCircleOf.innerText = "Plese Enter the Radius";
    }else {
        let pie = 3.14159265359;
        let areaofcr1 = pie * radiusValue * radiusValue;
        // let ArrrCrc = pie * areaofcr1;
        AreaofCircleOf.innerText = "Area of Circle = "+ areaofcr1+ ` Q^2`;
        AreaofCircleOf.style.color = "green";
        AreaofCircleOf.style.backgroundColor = "white";
        RadiusofCircle.disabled = true;
        Submitofcircle.disabled = true;
        Submitofcircle.style.backgroundColor = "black";
        Find6.innerText = "Plese Refresh to Re Calculate.";
        Find6.style.color = "brown";

    }
});

