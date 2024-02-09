//patron modular es para proteger tu codigo lo encapsula
const myModule=(()=>{
    'use strict'
    //evento click desde javaScript
        //const valueResult=document.getElementById('result');
        const btnPerimetroSquare=document.querySelector('#btnPerimetroSquare');
        const btnAreaSquare=document.querySelector('#btnAreaSquare');
        const btnPerimetroTriangle=document.querySelector('#btnPerimetroTriangle');
        const btnAreaTriangle=document.querySelector('#btnAreaTriangle');
        let btnDiametroCircle=document.querySelector('#btnDiametroCircle');
        let btnPerimetroCircle=document.querySelector('#btnPerimetroCircle');
        let btnAreaCircle=document.querySelector('#btnAreaCircle');
        const perimSquare=(side)=>side*4;
        const areaSquare=(side)=>side*side

        btnPerimetroSquare.addEventListener('click',()=>{
            let inputData=document.getElementById('inputSide');
            let value=Number(inputData.value);

            const result=`El perimetro del cuadrado es:  ${perimSquare(value)} cm`;
            document.getElementById('result').innerText=result;

        })
        //Ärea del cuadrado
        btnAreaSquare.addEventListener('click',()=>{
            let inputData=document.getElementById('inputSide');
            let value=Number(inputData.value);

            const result=`El área del cuadrado es:  ${areaSquare(value)} cm^2`;
            document.getElementById('result').innerText=result;

        })
        //Perimetro del triangulo
        const periTriangle=(side)=>side*3;
        const areaTriangle=(side)=>side*side/2;

        btnPerimetroTriangle.addEventListener('click',()=>{
            let inputData=document.getElementById('inputSid');
            let value=Number(inputData.value);

            const result=`El perimetro de la suma del triangulo es:  ${periTriangle(value)} cm`;
            document.getElementById('result').innerText=result;

        })
        //Ärea del triangulo
        btnAreaTriangle.addEventListener('click',()=>{
            let inputData=document.getElementById('inputSi');
            let value=Number(inputData.value);

            const result=`El Ärea del triangulo es:  ${areaTriangle(value)} cm^2`;
            document.getElementById('result').innerText=result;

        })
        //Perimetro Circle
        const diamCircle=(radio)=>radio*2
        const periCircle=(radio) => diamCircle(radio) * 3.14;

        btnDiametroCircle.addEventListener('click',()=>{
            let inputData=document.getElementById('inputS');
            let value=Number(inputData.value);

            const result=`El Diametro del Circulo es:  ${diamCircle(value)} cm^2`;
            document.getElementById('result').innerText=result;

        } )
        btnPerimetroCircle.addEventListener('click',()=>{
            let inputData=document.getElementById('inputS');
            let value=Number(inputData.value);

            const result=`El Perimetro del Circulo es:  ${periCircle(value)} cm`;
            document.getElementById('result').innerText=result;

        })
        const areaCircle = (radio) => (radio * radio) * Math.PI;
        btnAreaCircle.addEventListener('click',()=>{
            let inputData=document.getElementById('inputS');
            let value=Number(inputData.value);

            const result=`El Area del Circulo es:  ${areaCircle(value)} cm^2`;
            document.getElementById('result').innerText=result;

        })
        return{
            cpq:calcularPerimetroSquare,
            caq:calcularÁreaSquare,
            cpt:calcularPeriTriangle,
            cat:calcularAreaTriangle,
            cpc:calcularPerCircle,
            cac:calcularAreCircle,
            cdc:calcularDiamCircle
        }

})();
