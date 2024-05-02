function checkScientificNumber() {
    var input = document.getElementById('numberInput').value;
    var regex = /^[+-]?(\d+(\.\d+)?([eE][+-]?\d+)?|\.\d+([eE][+-]?\d+)?)$/;
    
    if (regex.test(input)) {
      document.getElementById('result').innerHTML = input + " is a scientific number.";
    } else {
      document.getElementById('result').innerHTML = input + " is not a scientific number.";
    }
  }