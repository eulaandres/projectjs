// Listas, array, arreglos
const lista = [2, "js", true, undefined, null ];
const Lista2 = new Array (4,5,"hola", true, null, undefined);
const lista3 = new Array(3);
lista3[0] = "Soy el 1° elemento en index 0";
const Lista4 = [lista, Lista2, lista3];

console.log(lista);
console.log(Lista2);
console.log(lista3);
console.log(Lista4);

//OBJETOS
const movil = {
    marca: "Nokia",
    altura: 10,
    ancho: 5,
    peso: 180,
    contactos: ["casa", "oficce", "mor"],
    almacenamiento:{ 
        microsd: 32,
        interno: 32
    }
}
console.log(movil.peso);

//FECHAS
const hoy = new Date();
console.log (hoy);

const fechaMilis = new Date(10); //utilizando milisegundos
console.log(fechaMilis);

const fechaCadena = new Date("march 3 2022");
console.log(fechaCadena);

const fechaValores = new Date(1990, 0, 10);
console.log(fechaValores);

const dia = hoy.getDate();
const mes = hoy.getMonth() +1;
const anio = hoy.getFullYear();

console.log(dia, mes, anio);