window.onload = function(){ 
    document.getElementById("goalColor").style.backgroundColor = getComputedStyle(document.getElementById("result")).backgroundColor;

    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    
    // окно вывода результата
    outputElement = document.getElementById("result")
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit
            }
            outputElement.innerHTML = a
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit
                outputElement.innerHTML = b        
            }                                           
        }
    }
    
    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function()
        {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        continueCalc(selectedOperation)
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return
        continueCalc(selectedOperation)
        selectedOperation = '+'
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        continueCalc(selectedOperation)
        selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        continueCalc(selectedOperation)
        selectedOperation = '/'
    }
    document.getElementById("btn_op_sign").onclick = function() { 
        if (!selectedOperation) {
            if (a !== '') {
                a *= -1;
                outputElement.innerHTML = a;
            }
        } else {
            if (b !== '') {
                b *= -1;
                outputElement.innerHTML = b;
            }
        }
    }
    document.getElementById("btn_op_percent").onclick = function() {
        if (!selectedOperation) {
            if (a !== '') {
                a = parseFloat(a) / 100;
                outputElement.innerHTML = a;
            }
        } else {
            if (b !== '') {
                b = parseFloat(b) * parseFloat(a) / 100;
                outputElement.innerHTML = b;
            }
        }
    }
    document.getElementById("btn_op_erase").onclick = function() {
        if (!selectedOperation) {
                a = a.slice(0, -1);
                outputElement.innerHTML = a
        } else {
                b = b.slice(0, -1);
                outputElement.innerHTML = b                         
        }
        if (outputElement.innerHTML === '')
            outputElement.innerHTML = 0;
    }
    document.getElementById("btn_op_sqrt").onclick = function() {
        if (!selectedOperation) {
            if (a !== '') {
                a = Math.sqrt(parseFloat(a));
                outputElement.innerHTML = a;
            }
        } else {
            if (b !== '') {
                b = Math.sqrt(parseFloat(b));
                outputElement.innerHTML = b;
            }
        }
    };
    document.getElementById("btn_op_pow").onclick = function() {
        if (!selectedOperation) {
            if (a !== '') {
                a = Math.pow(parseFloat(a), 2).toString();
                outputElement.innerHTML = a;
            }
        } else {
            if (b !== '') {
                b = Math.pow(parseFloat(b), 2).toString();
                outputElement.innerHTML = b;
            }
        }
    };
    document.getElementById("btn_op_factorial").onclick = function() {
        if (!selectedOperation) {
            if (a !== '') {
                a = calculateFactorial(parseFloat(a)).toString();
                outputElement.innerHTML = a;
            }
        } else {
            if (b !== '') {
                b = calculateFactorial(parseFloat(b)).toString();
                outputElement.innerHTML = b;
            }
        }
    };
    document.getElementById("btn_op_zeros").onclick = function() { 
        document.getElementById('btn_digit_0').click(); 
        document.getElementById('btn_digit_0').click(); 
        document.getElementById('btn_digit_0').click();
    }
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = null
        expressionResult = ''
        outputElement.innerHTML = 0
    }
    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
            
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
        }
        
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
    
        outputElement.innerHTML = a
    }

    document.getElementById("switchClr").onclick = function() {
        const changeElement = document.getElementById("goalColor");

        const lightBackgroundColor = "rgb(231, 235, 241)";
        const darkBackgroundColor = "rgb(36, 36, 36)";
    
        if (getComputedStyle(changeElement).backgroundColor === darkBackgroundColor) {
            changeElement.style.backgroundColor = lightBackgroundColor;
        } else {
            changeElement.style.backgroundColor = darkBackgroundColor;
        }
    }

    function calculateFactorial(number) {
        if (number < 0) {
          return "Error";
        } else if (number === 0) {
          return 1;
        } else {
          let result = 1;
          for (let i = 1; i <= number; i++) {
            result *= i;
          }
          return result;
        }
    };

    function continueCalc(selOp) {
        if (selectedOperation)
            document.getElementById('btn_op_equal').click();
    };

    
    
};