const calculationArea = [];

function showMenu() {
  const PI = 3.14;

  const option = prompt(
    `\nEscolha uma opção:
    \n1. Área do triângulo 
    \n2. Área do retângulo 
    \n3. Área do quadrado
    \n4. Área do trapézio
    \n5. Área do círculo
    `
  );

  switch (option) {
    case '1': {
      let triangleBase = parseFloat(prompt('Digite a base do triângulo'));
      let triangleHeight = parseFloat(prompt('Digite a altura do triângulo'));
      let triangleArea = (triangleBase * triangleHeight) / 2;
      console.log(`Área do triângulo: ${triangleArea}`);
      return triangleArea;
    }
    case '2': {
      let rectangleBase = parseFloat(prompt('Digite a base do retângulo'));
      let rectangleHeight = parseFloat(prompt('Digite a altura do retângulo'));
      let rectangleArea = rectangleBase * rectangleHeight;
      console.log(`Área do retângulo: ${rectangleArea}`);
      return rectangleArea;
    }
    case '3': {
      let squareSide = parseFloat(prompt('Digite o lado do quadrado'));
      let squareArea = squareSide * squareSide;
      console.log(`Área do quadrado: ${squareArea}`);
      return squareArea;
    }
    case '4': {
      let trapezoidBase1 = parseFloat(prompt('Digite a base maior do trapézio'));
      let trapezoidBase2 = parseFloat(prompt('Digite a base menor do trapézio'));
      let trapezoidHeight = parseFloat(prompt('Digite a altura do trapézio'));
      let trapezoidArea = ((trapezoidBase1 + trapezoidBase2) * trapezoidHeight) / 2;
      console.log(`Área do trapézio: ${trapezoidArea}`);
      return trapezoidArea;
    }
    case '5': {
      let circleRadius = parseFloat(prompt('Digite o raio do círculo'));
      let circleArea = PI * circleRadius * circleRadius;
      console.log(`Área do círculo: ${circleArea}`);
      return circleArea;
    }
    default:
      console.log('Alguma coisa de errado, tente novamente.');
  }
}

const areaCalculated = showMenu();
if (areaCalculated !== undefined) calculationArea.push(areaCalculated);
