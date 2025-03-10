import React, {useState} from "react";




const Calculator = () => {
    const[display, setDisplay] = useState("0");
    const[prevValue, setPrevValue] = useState(null);
    const[operator, setOperator] = useState(null);

    // const handleNumberClick = (num) => {
    //     setDisplay((prev) => (prev === "0" ? num : prev + num))
    // };

    function handleNumberClick(num){
        setDisplay(function(prev){
            if (prev === "0"){
                return num
            }
            return prev + num;
        });
    };

    const handleOperatorClick = (op) => {
        if (prevValue !== null && operator !== null) {
            handleEqualClick();
        }
        setPrevValue(display);
        setOperator(op);
        setDisplay("0");
    };

    const handleEqualClick = () => {
        if (!prevValue || !operator) return;
    

    const current = parseFloat(display)
    const previous = parseFloat(prevValue);
    let result;

    switch(operator) {
        case "+":
            result = previous + current;
            break;
        case "-":
            result = previous - current;
            break;
        case "x":
            result = previous * current;
            break;
        case "/":
            result = previous / current;
            break;
        default:
                return;
            
    };


    setDisplay(result.toString());
    setPrevValue(null);
    setOperator(null);

}; 


//   function handleEqualClick (){
//     if (prevValue !== null || !operator !== null)
//         return
//   }

//   var result;

//   if (operator === "+"){
//     result = previous + current
//   }
//   else if(operator === "-"){
//     result = previous - current
//   }
//   else if(operator === "*"){
//     result = previous * current
//   }
//   else if(operator === "/"){
//     result = previous / current
//   };



    const handleClear = () => {
        setDisplay("0");
        setPrevValue(null);
        setOperator(null);

    };



    return (
        <div className="calculator">
            <div className="display">{display}</div>
            <div className="buttons">
                <button onClick={handleClear}>AC</button>
                <button>+/-</button>
                <button>%</button>
                <button onClick={() =>handleOperatorClick("/")} className="operator">&divide;</button>

                <button onClick={() =>handleNumberClick("7")}>7</button>
                <button onClick={() =>handleNumberClick("8")}>8</button>
                <button onClick={() =>handleNumberClick("9")}>9</button>
                <button onClick={() =>handleOperatorClick("x")} className="operator">&times;</button>

                <button onClick={() =>handleNumberClick("4")}>4</button>
                <button onClick={() =>handleNumberClick("5")}>5</button>
                <button onClick={() =>handleNumberClick("6")}>6</button>
                <button onClick={() =>handleOperatorClick("-")} className="operator">-</button>

                <button onClick={() =>handleOperatorClick("+")} className="operator">+</button>
                <button onClick={() =>handleNumberClick("1")}>1</button>
                <button onClick={() =>handleNumberClick("2")}>2</button>
                <button onClick={() =>handleNumberClick("3")}>3</button>

                <button onClick={() =>handleNumberClick(".")}>.</button>
                <button onClick={() =>handleNumberClick("0")}>0</button>
                <button>&radic;</button>
                <button onClick={handleEqualClick} className="equal">=</button>
            
            </div>

        </div>
                

    )
};


export default Calculator