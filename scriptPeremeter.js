let Find7 = document.querySelector(".Find7"),
onestSide = document.querySelector("#onesideoftr"),
twoside= document.querySelector("#twosideoftr"),
thirdside = document.querySelector("#thirdsideoftr"),
PeremeterTr = document.querySelector("#TrianglePerJs"),
SubmitofTrPeremeter = document.querySelector("#SubmitperemeterTriJs");

SubmitofTrPeremeter.addEventListener("click", () => {
    let oneside = onestSide.value;
    let twosidee = twoside.value;
    let threeside = thirdside.value;
    if (oneside == 0 && twosidee == 0 && threeside == 0) {
        PeremeterTr.innerText = "Plese enter the value of Side";
        PeremeterTr.style.color = "red";
    }else if (oneside == 0 && twosidee == 0) {
        PeremeterTr.innerText = "Plese enter the value one and two Side";
        PeremeterTr.style.color = "red";
    }else if (twosidee == 0 && threeside == 0) {
        PeremeterTr.innerText = "Plese enter the value Two and Three Side";
        PeremeterTr.style.color = "red";
    }else if (oneside == 0 && threeside == 0) {
        PeremeterTr.innerText = "Plese enter the value of One and Three Side";
    }else if (oneside == 0) {
        PeremeterTr.innerText = "Plese enter the value one Side";
        PeremeterTr.style.color = "red";
    }else if (twosidee == 0) {
        PeremeterTr.innerText = "Plese enter the value Two Side";
        PeremeterTr.style.color = "red";
    }else if (threeside == 0){
        PeremeterTr.innerText = "Plese enter the value Three Side";
        PeremeterTr.style.color = "red";
    }else {
        let PeremeterofTraingle = Number(oneside) + Number(twosidee) + Number(threeside);
        console.log(PeremeterofTraingle);
        PeremeterTr.innerText = `Peremeter of Traingle = `+ PeremeterofTraingle + ` Q`;
        PeremeterTr.style.color = "green";
        onestSide.disabled = true;
        twoside.disabled = true;
        thirdside.disabled = true;
        SubmitofTrPeremeter.disabled = true;
        SubmitofTrPeremeter.style.backgroundColor = "black";
        Find7.innerText = "Plese Refresh Page to Calculate More..";
        Find7.style.color = "brown";
    }
    
});

let Find8 = document.querySelector(".Find8"),
SidePerSQ = document.querySelector("#SideofSQPer"),
PeremeterSQ = document.querySelector("#PerSquar"),
SubmitPerSQ = document.querySelector("#SubmitperSQ");

SubmitPerSQ.addEventListener("click", () => {
    let valueofSideSQ = SidePerSQ.value;
    // console.log(valueofSideSQ);
    if (valueofSideSQ == 0){
        PeremeterSQ.innerText = "Plese Enter The Value of Side";
        PeremeterSQ.style.color = "red";
    }else {
        let Peremeter = 4 * valueofSideSQ;
        // console.log(Peremeter);
        PeremeterSQ.innerText = `Peremeter Of The Square = `+ Peremeter+ ` Q`;
        PeremeterSQ.style.color = "green";
        PeremeterSQ.disabled = true;
        SidePerSQ.disabled = true;
        SubmitPerSQ.style.backgroundColor = "Black";
        Find8.innerText = "Plese Refresh Page to Calculate More..";
        Find8.style.color = "brown";
    }
    
});

let Find9 = document.querySelector(".Find9"),
LengthRec = document.querySelector("#LengthRecPer"),
BreathRec = document.querySelector("#BreathRePer"),
PerRec= document.querySelector("#PerRect");
SubmitRecPer= document.querySelector("#SubmitperRec");

SubmitRecPer.addEventListener("click", () => {
    let valueofLength = LengthRec.value;
    let valueofBreath = BreathRec.value;
    if (valueofLength == 0 && valueofBreath == 0){
        PerRec.innerText = "Plese enter The Value of L And B.";
        PerRec.style.color = "red";
    }else if (valueofLength == 0){
        PerRec.innerText = "Plese enter The Value of Length.";
        PerRec.style.color = "red";
    }
    else if (valueofBreath == 0){
        PerRec.innerText = "Plese enter The Value of Breath.";
        PerRec.style.color = "red";
    }else {
        let PerRectangle = 2 * (Number(valueofLength) + Number(valueofBreath));
        // console.log(PerRectangle);
        PerRec.innerText = `Peremeter of the Rectangle = `+ PerRectangle +` Q`;
        PerRec.style.color = "green";
        BreathRec.disabled = true;
        LengthRec.disabled = true;
        SubmitRecPer.disabled = true;
        SubmitRecPer.style.backgroundColor = "Black";
        Find9.innerText = "Plese Refresh Page to Calculate More..";
        Find9.style.color = "brown";
    }
});

let Find10 = document.querySelector(".Find10"),
LengthParlPer1 = document.querySelector("#LengthParlPeer"),
BreathParlPer1 = document.querySelector("#BreathParlPer"),
Perparl1 = document.querySelector("#Perparl"),
Submitperparl1 = document.querySelector("#Submitperparl");

Submitperparl1.addEventListener("click", () => {
    let valueOfFirst = LengthParlPer1.value;
    let valueOfSecond = BreathParlPer1.value;
    if(valueOfFirst == 0 && valueOfSecond == 0){
        Perparl1.innerText = "Plese enter The Value of First And Second Side.";
        Perparl1.style.color = "red";
    }else if (valueOfFirst == 0){
        Perparl1.innerText = "Plese enter The Value of First Side.";
        Perparl1.style.color = "red";
    }else if (valueOfSecond == 0){
        Perparl1.innerText = "Plese enter The Value of Second Side.";
        Perparl1.style.color = "red";
    }else {
        let PerParlrllo = 2 * (Number(valueOfFirst) + Number(valueOfSecond));
        console.log(PerParlrllo);
        Perparl1.innerText = `Peremeter of the Parllelogram = `+ PerParlrllo +` Q`;
        Perparl1.style.color = "green";
        BreathParlPer1.disabled = true;
        LengthParlPer1.disabled = true;
        Perparl1.disabled = true;
        Submitperparl1.style.backgroundColor = "Black";
        Find10.innerText = "Plese Refresh Page to Calculate More..";
        Find10.style.color = "brown";
    }
});

let Find11 = document.querySelector(".Find11"),
Lengthrho = document.querySelector("#Lengthrho"),
Perrho = document.querySelector("#Perrho"),
Submitperrho = document.querySelector("#Submitperrho");

Submitperrho.addEventListener("click", () => {
    let valueOfFirst = Lengthrho.value;
    if(valueOfFirst == 0){
        Perrho.innerText = "Plese enter The Value of length of Side.";
        Perrho.style.color = "red";
    }else {
        let Perrhount = 4 * valueOfFirst;
        console.log(Perrho);
        Perrho.innerText = `Peremeter of the Rhombus = `+ Perrhount +` Q`;
        Perrho.style.color = "green";
        Lengthrho.disabled = true;
        Submitperrho.disabled = true;
        Submitperrho.style.backgroundColor = "Black";
        Find11.innerText = "Plese Refresh Page to Calculate More..";
        Find11.style.color = "brown";
    }
});

let Find12 = document.querySelector(".Find12"),
Lengthcir = document.querySelector("#Lengthcir"),
Percir = document.querySelector("#Percir"),
Submitpercir = document.querySelector("#Submitpercir");

Submitpercir.addEventListener("click", () => {
    let valueOfFirst = Lengthcir.value;
    if(valueOfFirst == 0){
        Percir.innerText = "Plese Enter The Radius of Circle.";
        Percir.style.color = "red";
    }else {
        let Percirunit = 2 * valueOfFirst * 3.141;
        console.log(Percirunit);
        Percir.innerText = `Peremeter of the Rhombus = `+ Percirunit +` Q`;
        Percir.style.color = "green";
        Lengthcir.disabled = true;
        Submitpercir.disabled = true;
        Submitpercir.style.backgroundColor = "Black";
        Find12.innerText = "Plese Refresh Page to Calculate More..";
        Find12.style.color = "brown";
    }
});

let Find13 = document.querySelector(".Find13"),
Lengthcub = document.querySelector("#Lengthcub"),
Percub = document.querySelector("#Percub"),
Submitpercub = document.querySelector("#Submitpercub");

Submitpercub.addEventListener("click", () => {
    let valueOfFirst = Lengthcub.value;
    if(valueOfFirst == 0){
        Percub.innerText = "Plese Enter The value of Side of Cube.";
        Percub.style.color = "red";
    }else {
        let Percubunit = 12 * valueOfFirst;
        console.log(Percubunit);
        Percub.innerText = `Peremeter of the Rhombus = `+ Percubunit +` Q`;
        Percub.style.color = "green";
        Lengthcub.disabled = true;
        Submitpercub.disabled = true;
        Submitpercub.style.backgroundColor = "Black";
        Find13.innerText = "Plese Refresh Page to Calculate More..";
        Find13.style.color = "brown";
    }
});

let Find14 = document.querySelector(".Find14"),
Lengthcubo = document.querySelector("#LengthParcubo"),
Breathcubo = document.querySelector("#BreathParcubo"),
Heightcubo = document.querySelector("#HeightParcubo"),
Percubo = document.querySelector("#Percubo"),
Submitpercubo = document.querySelector("#Submitpercubo");

Submitpercubo.addEventListener("click", () => {
    let valueOfFirst = Lengthcubo.value;
    let valueOfSecond = Breathcubo.value;
    let valueOfThird = Heightcubo.value;
    if(valueOfFirst == 0 && valueOfSecond == 0 && valueOfThird == 0){
        Percubo.innerText = "Plese Enter The value of L,B,H of Cuboid.";
        Percubo.style.color = "red";
    }else if(valueOfFirst == 0 && valueOfSecond == 0){
        Percubo.innerText = "Plese Enter The value of L,B of Cuboid.";
        Percubo.style.color = "red";
    }else if(valueOfSecond == 0 && valueOfThird == 0){
        Percubo.innerText = "Plese Enter The value of B,H of Cuboid.";
        Percubo.style.color = "red";
    }else if(valueOfFirst == 0 && valueOfThird == 0){
        Percubo.innerText = "Plese Enter The value of L,H of Cuboid.";
        Percubo.style.color = "red";
    }else if(valueOfFirst == 0 ){
        Percubo.innerText = "Plese Enter The value of L of Cuboid.";
        Percubo.style.color = "red";
    }else if(valueOfSecond == 0){
        Percubo.innerText = "Plese Enter The value of B of Cuboid.";
        Percubo.style.color = "red";
    }else if(valueOfThird == 0){
        Percubo.innerText = "Plese Enter The value of H of Cuboid.";
        Percubo.style.color = "red";
    }else {
        let Percubounit = 4 * (Number(valueOfFirst) + Number(valueOfSecond) + Number(valueOfThird));
        console.log(Percubounit);
        Percubo.innerText = `Peremeter of the Cuboid = `+ Percubounit +` Q`;
        Percubo.style.color = "green";
        Lengthcubo.disabled = true;
        Breathcubo.disabled = true;
        Heightcubo.disabled = true;
        Submitpercubo.disabled = true;
        Submitpercubo.style.backgroundColor = "Black";
        Find14.innerText = "Plese Refresh Page to Calculate More..";
        Find14.style.color = "brown";
    }
});