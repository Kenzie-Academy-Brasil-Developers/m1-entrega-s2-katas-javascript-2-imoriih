// comece a criar a sua função add na linha abaixo
function add(num1, num2){
    return num1 + num2;
  }

  console.log(add(2,4))

// descomente a linha seguinte para testar sua função

console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(num1,num2){
    let resultado = 0;
    for(let index = 0; index < num2; index++){
     resultado = add(resultado, num1)
    }
    return resultado
 }
 console.log(multiply(2,4))

// descomente a linha seguinte para testar sua função

console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(a,b) {
    let potencia = 1;
    for (let index = 0; index < b; index++) {
        potencia = multiply(potencia,a)
    }  return potencia
  }
  console.log(power(2,8))

// descomente a linha seguinte para testar sua função

console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(a){
    let fatori = 1;
    for (isso = 0; isso < a; isso++){
      fatori += multiply(fatori, index)
    }
    return fatori
  }

  console.log(factorial(2))

// descomente a linha seguinte para testar sua função

console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');
