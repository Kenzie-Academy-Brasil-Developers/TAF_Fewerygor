// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
const gender = process.argv[2]; // Genero 
let height = process.argv[3]; // Altura
let barReps = process.argv[4]; // Repetições com barra
let barSeconds = process.argv[5]; // Tempo das repetições com barra 
const abs = process.argv[6]; // Abdominais
let runDistance = process.argv[7]; // Distância da corrida
let runTime = process.argv[8]; // Tempo da corrida
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
    if ((height >= 1.70) && (barReps >= 6 || barSeconds >= 15) && (abs >= 41) && ((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200)) && ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30 )) { 
        passed = true;
    }
} else if (gender === "female"){
    if ((height >= 1.60) && (barReps >= 5 || barSeconds >= 12) && (abs >= 41) && ((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320)) && ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30 )) {
        passed = true;
    }
};

// Criamos a condição gender para os respectivos gêneros com seus respectivos pontos e nela colocaremos sub condições para analisar os testes. Começando com male.

// Na condição height estou procurando se o valor de height é maior ou igual a 1.70 para genero male. Para genero female  1.60  para serem aprovados ou não, caso a altura seja menor que os valores pedidos.

//Coloquei operador lógico AND entre as condições para seguir com as sequencias das condições.

//Precisamos de um certo valor de repetição de barra da condição barReps OU de duração minima na barra da condição barSeconds, valor maior que o valor exigido nas condições. Para isso utilizamos o operador lógico OR entre os dois e os isolamos em uma condição para ser lida antes de continuar o código.

//Na condição abs eu deixei a condição do valor ser maior ou igual a 41 como pedido para que seja aprovado. Deixei dentro de parenteses para ser mais semantico e dar um visual melhor para que programadores possam ler melhor.

//Precisamos do valor maior igual de Km percorrido de runDistance E do valor maximo de tempo, ou seja: menor igual, da runTime, porém, podemos obter 2 valores diferentes de cada um. Para isso utilizamos o operador lógico AND entre as duas condições para receber os valores específicos e fechamos as duas condições em uma. Por fora das condições utilizamos o operador lógico OR  e abrimos uma condição com as duas mesmas condições dentro utilizando o operador Lógico AND para utilizar os outros dois valores diferentes.

//Aqui precisamos do valor da distancia de natação: maior igual na condição swimDistance E o tempo máximo de natação, ou seja: menor igual da condição swimTime OU o tempo  máximo de mergulho na condição diveTime: menor igual. Para isso criamos uma condição com as condições swimDistance E swimTime, dentro com o operador lógico AND e calcularemos a distancia maior igual de natação e o tempo máximo, menor igual. De fora utilizamos o operador lógico OR para achar o valor de tempo do mergulho, caso não precise dos outros dois valores anteriores. Calculamos se o tempo de mergulho foi no máximo até 30 segundos na condição diveTime para saber se passou no teste.

// Na saída da condição colocaremos a variavel passed = true para não dar false e dar erro no teste.

//Usaremos else if para caso o teste seja para o genero feminino, gender female. e faremos as mesmas estratégias, porém com os valores de teste referente ao genero feminino.


/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
