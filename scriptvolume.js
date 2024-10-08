let Find15 = document.querySelector(".Find15"),
SideCube = document.querySelector("#SideCube"),
VolCube = document.querySelector("#VolCube"),
SubmitVolcube = document.querySelector("#SubmitVolcube");

SubmitVolcube.addEventListener("click", () => {
    let valueofSide = SideCube.value;
    if(valueofSide == 0){
        VolCube.innerText = "Plese Enter The Value of Side of Cube";
        VolCube.style.color = "Red";
    }else if(valueofSide < 0){
        VolCube.innerText = "Plese Enter The Positive Value";
        VolCube.style.color = "Red";
    }else {
        let VolumeofCube = valueofSide * valueofSide * valueofSide;
        VolCube.innerText = `Volume of Cube = `+VolumeofCube+` Q^3.`;
        VolCube.style.color = "Green";
        SideCube.disabled = true;
        SubmitVolcube.disabled = true;
        Find15.innerText = "Plese Refresh Page to More Calculate"
    }
});

let Find16 = document.querySelector(".Find16"),
Lengthofcuboid = document.querySelector("#Lengthcuboid"),
Breathofcuboid = document.querySelector("#breathcuboid"),
Heightofcuboid = document.querySelector("#heightcuboid"),
VolCuboid = document.querySelector("#VolCuboid"),
SubmitVolcuboid = document.querySelector("#SubmitVolcuboid");

SubmitVolcuboid.addEventListener("click", () => {
    let valueoflength = Lengthofcuboid.value;
    let valueofBreath = Breathofcuboid.value;
    let valueofHeight = Heightofcuboid.value;
    if(valueoflength == 0 && valueofBreath == 0 && valueofHeight == 0){
        VolCuboid.innerText = "Plese Enter The Value of L,B & H of Cuboid";
        VolCuboid.style.color = "Red";
    }else if (valueoflength < 0 || valueofBreath < 0 || valueofHeight < 0){
        VolCuboid.innerText = "Plese Enter The Positive Value";
        VolCuboid.style.color = "Red";
    }else if(valueoflength == 0 && valueofBreath == 0){
        VolCuboid.innerText = "Plese Enter The Value of L & B of Cuboid";
        VolCuboid.style.color = "Red";
    }else if(valueofBreath == 0 && valueofHeight == 0){
        VolCuboid.innerText = "Plese Enter The Value of B & H of Cuboid";
        VolCuboid.style.color = "Red";
    }else if(valueoflength == 0 && valueofHeight == 0){
        VolCuboid.innerText = "Plese Enter The Value of L & H of Cuboid";
        VolCuboid.style.color = "Red";
    }else if(valueoflength == 0){
        VolCuboid.innerText = "Plese Enter The Value of L of Cuboid";
        VolCuboid.style.color = "Red";
    }else if(valueofBreath == 0){
        VolCuboid.innerText = "Plese Enter The Value of B of Cuboid";
        VolCuboid.style.color = "Red";
    }else if(valueofHeight == 0){
        VolCuboid.innerText = "Plese Enter The Value of H of Cuboid";
        VolCuboid.style.color = "Red";
    }else {
        let VolumeofCuboid = valueoflength * valueofBreath * valueofHeight;
        VolCuboid.innerText = `Volume of Cuboid = `+VolumeofCuboid+` Q^3.`;
        VolCuboid.style.color = "Green";
        Lengthofcuboid.disabled = true;
        Breathofcuboid.disabled = true;
        Heightofcuboid.disabled = true;
        SubmitVolcuboid.disabled = true;
        Find16.innerText = "Plese Refresh Page to More Calculate"
    }
});

let Find17 = document.querySelector(".Find17"),
radiusofcylinder = document.querySelector("#RadiusofCylinder"),
heightofcylinder = document.querySelector("#HeightofCylinder"),
VolCylinder = document.querySelector("#VolCylinder"),
SubmitVolCylinder = document.querySelector("#SubmitVolCylinder");

SubmitVolCylinder.addEventListener("click", () => {
    let valueofRadius = radiusofcylinder.value;
    let valueofHeight = heightofcylinder.value;
    if(valueofRadius == 0 && valueofHeight == 0){
        VolCylinder.innerText = "Plese Enter The Value of Radius And Heig. of Cylinder";
        VolCylinder.style.color = "Red";
    }else if(valueofHeight < 0 || valueofRadius < 0){
        VolCylinder.innerText = "Plese Enter The Positive Value";
        VolCylinder.style.color = "Red";
    }else if(valueofRadius == 0){
        VolCylinder.innerText = "Plese Enter The Value of Radius of Cylinder";
        VolCylinder.style.color = "Red";
    }else if(valueofHeight == 0){
        VolCylinder.innerText = "Plese Enter The Value of Height of Cylinder";
        VolCylinder.style.color = "Red";
    }else {
        let VolumeofCylinder = 3.141 * valueofRadius * valueofRadius * valueofHeight ;
        console.log(VolumeofCylinder);
        VolCylinder.innerText = `Volume of Cylinder = `+VolumeofCylinder+` Q^3.`;
        VolCylinder.style.color = "Green";
        radiusofcylinder.disabled = true;
        Heightofcuboid.disabled = true;
        SubmitVolCylinder.disabled = true;
        Find17.innerText = "Plese Refresh Page to More Calculate"
    }
});

let Find18 = document.querySelector(".Find18"),
radiusofSphere = document.querySelector("#RadiusofSphere"),
VolSphere = document.querySelector("#VolSphere"),
SubmitVolSphere = document.querySelector("#SubmitVolSphere");

SubmitVolSphere.addEventListener("click", () => {
    let valueofRadius = radiusofSphere.value;
    if(valueofRadius == 0){
        VolSphere.innerText = "Plese Enter The Value of Radius of Sphere";
        VolSphere.style.color = "Red";
    }else if(valueofRadius < 0){
        VolSphere.innerText = "Plese Enter The Positive Value";
        VolSphere.style.color = "Red";
    }else {
        let Volumeofsphere = (4/3) * 3.141 * valueofRadius * valueofRadius * valueofRadius;
        VolSphere.innerText = `Volume of Sphere = `+Volumeofsphere+` Q^3.`;
        VolSphere.style.color = "Green";
        radiusofSphere.disabled = true;
        SubmitVolSphere.disabled = true;
        Find18.innerText = "Plese Refresh Page to More Calculate"
    }
});

let Find19 = document.querySelector(".Find19"),
Baseofpyramid = document.querySelector("#baseofpyr"),
heightofpyramid = document.querySelector("#Heightofpyr"),
Volpyramid = document.querySelector("#Volpyramid"),
SubmitVolPyramid = document.querySelector("#SubmitVolpyramid");

SubmitVolPyramid.addEventListener("click", () => {
    let valueofBase = Baseofpyramid.value;
    let valueofHeight = heightofpyramid.value;
    if(valueofBase == 0 && valueofHeight == 0){
        Volpyramid.innerText = "Plese Enter The Value of Base And Heig. of Pyramid";
        Volpyramid.style.color = "Red";
    }else if(valueofHeight < 0 || valueofBase < 0){
        Volpyramid.innerText = "Plese Enter The Positive Value";
        Volpyramid.style.color = "Red";
    }else if(valueofBase == 0){
        Volpyramid.innerText = "Plese Enter The Value of Radius of Cylinder";
        Volpyramid.style.color = "Red";
    }else if(valueofHeight == 0){
        Volpyramid.innerText = "Plese Enter The Value of Height of Cylinder";
        Volpyramid.style.color = "Red";
    }else {
        let VolumeofPyramid = (1/3) * valueofBase * valueofHeight ;
        Volpyramid.innerText = `Volume of Pyramid = `+VolumeofPyramid+` Q^3.`;
        Volpyramid.style.color = "Green";
        Baseofpyramid.disabled = true;
        heightofpyramid.disabled = true;
        SubmitVolPyramid.disabled = true;
        Find18.innerText = "Plese Refresh Page to More Calculate"
    }
});

let Find20 = document.querySelector(".Find20"),
radiusofRightcon = document.querySelector("#RadiusofRightcon"),
heightofRightcon = document.querySelector("#HeightofRightcon"),
VolRightcon = document.querySelector("#VolRightcon"),
SubmitVolRightcon = document.querySelector("#SubmitVolRightcon");

SubmitVolRightcon.addEventListener("click", () => {
    let valueofRadius = radiusofRightcon.value;
    let valueofHeight = heightofRightcon.value;
    if(valueofRadius == 0 && valueofHeight == 0){
        VolRightcon.innerText = "Plese Enter The Value of Radius And Heig. of Con";
        VolRightcon.style.color = "Red";
    }else if(valueofHeight < 0 || valueofRadius < 0){
        VolRightcon.innerText = "Plese Enter The Positive Value";
        VolRightcon.style.color = "Red";
    }else if(valueofRadius == 0){
        VolRightcon.innerText = "Plese Enter The Value of Radius of Con";
        VolRightcon.style.color = "Red";
    }else if(valueofHeight == 0){
        VolRightcon.innerText = "Plese Enter The Value of Height of Con";
        VolRightcon.style.color = "Red";
    }else {
        let VolumeofRightcon = (1/3) * 3.14159265359 * valueofRadius * valueofRadius * valueofHeight ;
        console.log(VolumeofRightcon);
        VolRightcon.innerText = `Volume of Right Circular Cone = `+VolumeofRightcon+` Q^3.`;
        VolRightcon.style.color = "Green";
        radiusofRightcon.disabled = true;
        heightofRightcon.disabled = true;
        SubmitVolRightcon.disabled = true;
        Find20.innerText = "Plese Refresh Page to More Calculate"
    }
});

let Find21 = document.querySelector(".Find21"),
LengthofRcPyramid = document.querySelector("#LengthRcPyramid"),
BreathofRcPyramid = document.querySelector("#breathRcPyramid"),
HeightofRcPyramid = document.querySelector("#heightRcPyramid"),
VolRcPyramid = document.querySelector("#VolRcPyramid"),
SubmitVolRcPyramid = document.querySelector("#SubmitVolRcPyramid");

SubmitVolRcPyramid.addEventListener("click", () => {
    let valueoflength = LengthofRcPyramid.value;
    let valueofBreath = BreathofRcPyramid.value;
    let valueofHeight = HeightofRcPyramid.value;
    if(valueoflength == 0 && valueofBreath == 0 && valueofHeight == 0){
        VolRcPyramid.innerText = "Plese Enter The Value of L,B & H";
        VolRcPyramid.style.color = "Red";
    }else if (valueoflength < 0 || valueofBreath < 0 || valueofHeight < 0){
        VolRcPyramid.innerText = "Plese Enter The Positive Value";
        VolRcPyramid.style.color = "Red";
    }else if(valueoflength == 0 && valueofBreath == 0){
        VolRcPyramid.innerText = "Plese Enter The Value of L & B";
        VolRcPyramid.style.color = "Red";
    }else if(valueofBreath == 0 && valueofHeight == 0){
        VolRcPyramid.innerText = "Plese Enter The Value of B & H";
        VolRcPyramid.style.color = "Red";
    }else if(valueoflength == 0 && valueofHeight == 0){
        VolRcPyramid.innerText = "Plese Enter The Value of L & H";
        VolRcPyramid.style.color = "Red";
    }else if(valueoflength == 0){
        VolRcPyramid.innerText = "Plese Enter The Value of L";
        VolRcPyramid.style.color = "Red";
    }else if(valueofBreath == 0){
        VolRcPyramid.innerText = "Plese Enter The Value of B";
        VolRcPyramid.style.color = "Red";
    }else if(valueofHeight == 0){
        VolRcPyramid.innerText = "Plese Enter The Value of H";
        VolRcPyramid.style.color = "Red";
    }else {
        let VolumeofRcPyramid = (1/3) * valueoflength * valueofBreath * valueofHeight;
        VolRcPyramid.innerText = `Volume of Cuboid = `+VolumeofRcPyramid+` Q^3.`;
        VolRcPyramid.style.color = "Green";
        LengthofRcPyramid.disabled = true;
        BreathofRcPyramid.disabled = true;
        HeightofRcPyramid.disabled = true;
        SubmitVolRcPyramid.disabled = true;
        Find21.innerText = "Plese Refresh Page to More Calculate"
    }
});