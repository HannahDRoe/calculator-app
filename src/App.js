import React, {Component} from "react";
import "./App.css";
import CalcButtons from "./CalcButtons";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: 0,
            prevValue: 0,
            operator: null,
            resetValue: false
        };
        this.setOperator = this.setOperator.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
        this.displayNum = this.displayNum.bind(this);
        this.removeLastNum = this.removeLastNum.bind(this);
        this.resetAll = this.resetAll.bind(this);
        this.resetCurrentVal = this.resetCurrentVal.bind(this);
        this.displayCurrentValue = this.displayCurrentValue.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.addDecimal = this.addDecimal.bind(this);
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }
    setOperator(newOperator) {
        if (newOperator === "%") {
            this.setState({
                currentValue: this.state.currentValue / 100
            });
        } else if (newOperator === "√") {
            this.setState({
                currentValue: Math.sqrt(this.state.currentValue)
            });
        } else {
            this.setState({
                operator: newOperator,
                currentValue: 0,
                prevValue: this.state.currentValue,
                resetValue: true
            });
        }
    }
    handleEquals() {
        const prevValue = this.state.prevValue;
        const currentValue = this.state.currentValue;
        const operator = this.state.operator;
        let calculatedValue;
        switch (operator) {
            case "+":
                calculatedValue = prevValue + currentValue;
                break;
            case "-":
                calculatedValue = prevValue - currentValue;
                break;
            case "*":
                calculatedValue = prevValue * currentValue;
                break;
            case "/":
                calculatedValue = prevValue / currentValue;
                break;
            case "%":
                calculatedValue = currentValue / 100;
            default:
                calculatedValue = currentValue;
                break;
        }
        this.setState({
            currentValue: calculatedValue,
            operator: null
        });
    }
    resetAll() {
        this.setState({
            currentValue: 0,
            prevValue: 0,
            operator: null
        });
    }
    resetCurrentVal() {
        this.setState({
            currentValue: 0
        });
    }
    removeLastNum() {
        const currentVal = this.state.currentValue;
        const currentValueString = currentVal.toString();
        const lastNum = currentValueString.slice(0, -1);
        if (currentVal === 0) return;
        if (currentValueString.length === 1) {
            this.resetCurrentVal();
        } else {
            this.setState({
                currentValue: lastNum
            });
        }
    }
    addDecimal() {
        const str = this.state.currentValue.toString();
        const addedDecimal = str.concat(".");
        if (str.includes(".")) {
            return;
        } else {
            this.setState({
                currentValue: addedDecimal
            });
        }
    }
    displayNum(num) {
        const numToString = num.toString();
        const newCurrentValString = this.state.currentValue
            .toString()
            .concat(numToString);
        if(newCurrentValString.length >=12){
            return
        }
        if (this.state.currentValue === "0.") {
            this.setState({
                currentValue: newCurrentValString
            });
        }
        if (this.state.currentValue === 0) {
            this.setState({
                currentValue: num
            });
        } else if (this.state.resetValue) {
            this.setState({
                currentValue: num,
                resetValue: !this.state.resetValue
            });
        }
        this.setState({
            currentValue: Number(newCurrentValString)
        });
    }
    displayCurrentValue() {
        if (isNaN(this.state.currentValue)) return "Error";
        if(this.state.currentValue.lenght > 12 ){
            return this.state.currentValue.toFixed(12)
        }
        return this.state.currentValue;
    }
    handleKeyDown({key}) {
        switch (key) {
            case "+":
            case "-":
            case "*":
            case "/":
            case "%":
                this.setOperator(key);
                break;
            case "Enter":
            case "=":
                this.handleEquals();
                break;
            case "Backspace":
                this.removeLastNum();
                break;
            case ".":
                this.addDecimal();
            default:
                break;
        }
        if (!isNaN(key)) {
            let numString = Number.parseInt(key);
            this.displayNum(numString);
        }
    }
    render() {
        return ( 
            <div className = "App">
                <header className = "App-header">
                    <h1 className = "App-title"> Calculator App </h1> 
                </header> 
                <div id = "calcContainer">
                <div id = "calcDisplay"> {this.displayCurrentValue()} </div> 
                    <CalcButtons 
                        setOperator = {this.setOperator}
                        displayNum = {this.displayNum}
                        removeLastNum = {this.removeLastNum}
                        resetAll = {this.resetAll}
                        resetCurrentVal = {this.resetCurrentVal}
                        handleOperators = {this.handleOperators}
                        handleEquals = {this.handleEquals}
                        addDecimal = {this.addDecimal}
                    /> 
                </div> 
            </div>
        );
    }
}

export default App;