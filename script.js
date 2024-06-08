function calculateFibonacci() {
    var number = parseInt(document.getElementById('number').value);
    
    var fibSeries = [];
    fibSeries[0] = 0;
    fibSeries[1] = 1;
  
    for (var i = 2; i < number; i++) {
      fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }
  
    var resultString = "Sequência de Fibonacci até o " + number + "º termo: " + fibSeries.join(", ");
    document.getElementById('result').textContent = resultString;
  }
  