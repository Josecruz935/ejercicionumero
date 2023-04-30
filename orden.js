const numero = [1, 2, 5, 77, 89, 4, 33];

numero.sort((b,f) => {
    if(b == f) {
      return 0; 
    }
    if(b < f) {
      return -1;
    }
    return 1;
  }
  );
const mayor = numero[0];
const menor = numero[numero.length - 1];

console.log(" de mayor a menor:", numero);
console.log("menor:", mayor);
console.log("mayor:", menor);
