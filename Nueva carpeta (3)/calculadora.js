let num1, num2, operator, result;

while (true) {
  num1 = parseFloat(prompt("Ingrese el primer numero:"));
  if (isNaN(num1)) {
    alert("Ingrese un numero valido.");
    continue;
  }
  operator = prompt("Elije una operacion (+, -, *, /):");

  if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
    alert("Elija una operacion valida");
    continue;
  }

  num2 = parseFloat(prompt("Ingrese el segundo numero:"));
  if (isNaN(num2)) {
    alert("Ingrese un numero valido.");
    continue;
  }

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("No se puede dividir por 0.");
        continue;
      }
      result = num1 / num2;
      break;
  }

  alert("Resultado: " + result);

  const Continuar = confirm("Quieres Hacer Otro Calculo?");
  if (!Continuar) {
    break;
  }
}