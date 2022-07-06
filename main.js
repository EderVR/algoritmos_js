// Simulacion de un termometro por medio de variables
// si num1 es mayor a 50, la variable sera tomada si fuesen grados fahrenheit
var num1 = 28;
num1 = 60;
const temp1 = "centigrados";
var temp2 = "fahrenheit";

if (num1 >= 28 && num1 < 50){
  console.log("Es un buen clima, hoy hay: " + num1 + ' grados ' + temp1);
}else if (num1 <= 27) {
  console.log("Hoy hace mucho frio" + "La temperatura es " + num1 + ' grados ' + temp1); 
} else {
  if ( num1 > 50 && num1 < 122 )
  console.log("Hoy hay " + num1 + " grados " + temp2);
  console.log("¿Estas en un refrigerador?, ve a buscar un lugar mas templado");
};

let buenaConexion = {
  ping: "60",
  control: "funcionando",
  hambre: false,
  juegos: [
    "Call of duty", "Apex"
  ],
  internet: false
}

if (buenaConexion.internet){
  console.log("Hora de jugar");
  if (buenaConexion.juegos.length > 0){
    console.log("Hoy podemos jugar Call of duty, o Apex");
    let comer = buenaConexion.hambre;
    let fluido = buenaConexion.ping;
    if (comer === false && fluido < 100){
      console.log("Todo esta perfecto, hora de jugar hasta ganar");
      //Ejecutar cualquier juego disponible
    }
  }else{
    console.log("No hay juegos disponibles, favor de comprar uno barato");
  }
}else{
  console.log("No hay internet, no hay nada que hacer");
}



