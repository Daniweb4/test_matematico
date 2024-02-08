const perimSquare=(side)=>side*4;

function calcularPerimetroSquare(){
    let inputData=document.getElementById('inputSide');
    let value=Number(inputData.value);

    const result=`El perimetro del cuadrado es:  ${perimSquare(value)} cm`;
    document.getElementById('result').innerText=result;
}