import { useState, useRef } from "react";
import "./App.css";

function App() {
    const inputRef = useRef(null); // Reference for the input field
    const resultRef = useRef(null); // Reference for the result display
    const [result, setResult] = useState(0); // State to store the current result

    // Function for addition
    function plus(e) {
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value));
    }

    // Function for subtraction
    function minus(e) {
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value));
    }

    // Function for multiplication
    function times(e) {
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value));
    }

    // Function for division
    function divide(e) {
        e.preventDefault();
        const value = Number(inputRef.current.value);
        if (value === 0) {
            alert("Cannot divide by zero!");
            return;
        }
        setResult((result) => result / value);
    }

    // Function to reset the input field
    function resetInput(e) {
        e.preventDefault();
        inputRef.current.value = "";
    }

    // Function to reset the result
    function resetResult(e) {
        e.preventDefault();
        setResult(0);
    }

    return ( <
        div className = "App" >
        <
        div >
        <
        h1 > Simplest Working Calculator < /h1> <
        /div> <
        form >
        <
        p ref = { resultRef } >
        Current Total: < strong > { result } < /strong> <
        /p> <
        input pattern = "[0-9]"
        ref = { inputRef }
        type = "number"
        placeholder = "Type a number" /
        >
        <
        button onClick = { plus } > add < /button> <
        button onClick = { minus } > subtract < /button> <
        button onClick = { times } > multiply < /button> <
        button onClick = { divide } > divide < /button> <
        button onClick = { resetInput } > reset input < /button> <
        button onClick = { resetResult } > reset result < /button> <
        /form> <
        /div>
    );
}

export default App;