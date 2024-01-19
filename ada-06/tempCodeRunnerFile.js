const numerosDaSorte = [37, 14, 26, 5, 94, 87]  

for(let i = 0; i < numerosDaSorte.length; i++){

  if (numerosDaSorte[i] % 2 === 0 && numerosDaSorte[i] < 50){
  console.log( "Numero da sorte é par e menor que 50: ", numerosDaSorte[i]);
  } 
  
  if (numerosDaSorte[i] < 50) {
    console.log( "Numero da sorte é menor que 50: ", numerosDaSorte[i]);
}
 if (numerosDaSorte[i] > 50){
    console.log( "Numero da sorte é maior que 50: ", numerosDaSorte[i]);
  }
 
}