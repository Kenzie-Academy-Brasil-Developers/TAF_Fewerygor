// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
const gender = process.argv[2]; // Genero 
const height = process.argv[3]; // Altura
const barReps = process.argv[4]; // Repetições com barra
const barSeconds = process.argv[5]; // Tempo das repetições com barra 
const abs = process.argv[6]; // Abdominais
const runDistance = process.argv[7]; // Distância da corrida
const runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**

if (gender === "male") {
    if ((height >= 1.70) && //Calculando se a altura é maior ou igual a 1.70 metros.
        (barReps >= 6 || barSeconds >= 15) && //Calculando se barReps é maior ou igual a 6 repetições ou barSeconds é maior igual a 15 com operador lógico OR.
        (abs >= 41) && //Calculando se a quantidade de abdominais é maior ou igual a 41 repetições.
        ((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200)) && //Calculando se runDistance é maior ou igual a 3km e utilizando operador lógico AND runTime é menor ou igual a 12 minutos ou utilizando operador lógico OR, se runDistance é maior ou igual a 5km e runTime é menor ou igual a 20 minutos, utilizando operador AND também.
        ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30 )) { //Calculando se swimDistance é maior ou igual a 100m e utilizando operador lógico AND se swimTime é menor ou igual a 1 minuto ou utilizando operador lógico OR se diveTime é menor ou igual a 30 segundos.
        passed = true; //Na saída da condição colocaremos a variavel passed = true para não dar false e dar erro no teste.
    }
} else if (gender === "female"){ //Criando outra condição para o teste do genero feminino, com suas especificações diferentes.
    if ((height >= 1.60) && //Calculando se a altura é maior ou igual a 1.60 metros.
        (barReps >= 5 || barSeconds >= 12) && //Calculando se barReps é maior ou igual a 5 repetições ou barSeconds é maior igual a 12 com operador lógico OR.
        (abs >= 41) && //Calculando se a quantidade de abdominais é maior ou igual a 41 repetições.
        ((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320)) &&  //Calculando se runDistance é maior ou igual a 4km e utilizando operador lógico AND runTime é menor ou igual a 15 minutos ou utilizando operador lógico OR, se runDistance é maior ou igual a 6km e runTime é menor ou igual a 22 minutos, utilizando operador AND também.
        ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30 )) { //Calculando se swimDistance é maior ou igual a 100m e utilizando operador lógico AND se swimTime é menor ou igual a 1 minuto ou utilizando operador lógico OR se diveTime é menor ou igual a 30 segundos.
        passed = true; //Na saída da condição colocaremos a variavel passed = true para não dar false e dar erro no teste.
    }
};


/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
