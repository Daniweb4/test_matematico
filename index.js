const perimSquare=(side)=>side*4;
const areaSquare=(side)=>side*side

function calcularPerimetroSquare(){
    let inputData=document.getElementById('inputSide');
    let value=Number(inputData.value);

    const result=`El perimetro del cuadrado es:  ${perimSquare(value)} cm`;
    document.getElementById('result').innerText=result;
}
//Ärea del cuadrado
function calcularÁreaSquare(){
    let inputData=document.getElementById('inputSide');
    let value=Number(inputData.value);

    const result=`El área del cuadrado es:  ${areaSquare(value)} cm^2`;
    document.getElementById('result').innerText=result;
}
//Perimetro del triangulo
const periTriangle=(side)=>side*3;
const areaTriangle=(side)=>side*side/2;

function calcularPeriTriangle(){
    let inputData=document.getElementById('inputSid');
    let value=Number(inputData.value);

    const result=`El perimetro de la suma del triangulo es:  ${periTriangle(value)} cm`;
    document.getElementById('result').innerText=result;
}
//Ärea del triangulo
function calcularAreaTriangle(){
    let inputData=document.getElementById('inputSi');
    let value=Number(inputData.value);

    const result=`El Ärea del triangulo es:  ${areaTriangle(value)} cm^2`;
    document.getElementById('result').innerText=result;
}
//Perimetro Circle
const diamCircle=(radio)=>radio*2
const periCircle=(radio) => diamCircle(radio) * 3.14;

function calcularDiamCircle(){
    let inputData=document.getElementById('inputS');
    let value=Number(inputData.value);

    const result=`El Diametro del Circulo es:  ${diamCircle(value)} cm^2`;
    document.getElementById('result').innerText=result;
}
function calcularPerCircle(){
    let inputData=document.getElementById('inputS');
    let value=Number(inputData.value);

    const result=`El Perimetro del Circulo es:  ${periCircle(value)} cm`;
    document.getElementById('result').innerText=result;
}
const areaCircle = (radio) => (radio * radio) * Math.PI;
function calcularAreCircle(){
    let inputData=document.getElementById('inputS');
    let value=Number(inputData.value);

    const result=`El Area del Circulo es:  ${areaCircle(value)} cm^2`;
    document.getElementById('result').innerText=result;
}