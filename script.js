class Calculator {

    constructor(previousText, currentText) {

        this.previousText = previousText;
        this.currentText = currentText;
        this.clear();

    }

    clear() {

        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;

    }

    delete() {

        this.currentOperand = this.currentOperand.toString().slice(0, -1);

    }

    appendNumber(number) {

        if ( number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }

    chooseOperation(operation) {


    }

    compute(){


    }

    getPanel(){

        

    }

    updatePanel() {

        this.currentText.innerText = this.currentOperand;

    }


}


//Create const for assign values

const numberButtons = document.querySelectorAll('data-number');
const operationButton = document.querySelectorAll('data-operation');
const deleteButton = document.querySelectorAll('data-delete');
const allClearButton = document.querySelectorAll('data-all-clear');
const previousText = document.querySelectorAll('data-previous');
const currentText = document.querySelectorAll('data-current');
const equalsButtons = document.querySelectorAll('data-equals');

const calculator = new Calculator(previousText, currentText);

numberButtons.forEach(button => { 

    button.addEventListener('click', () => {

        calculator.appendNumber(button.innerText);
        calculator.updatePanel();

    })

})