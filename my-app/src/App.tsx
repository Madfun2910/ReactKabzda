import React from 'react';
import './App.css';


// Function declaration
function App() {

    return (
        <div className="App">
            <div>
                This is APP component
                <Rating/>
                <Accordion/>
            </div>
        </div>
    );
}

function Rating() {
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}
function Star () {
    return (
        <div>star</div>
    )
}

function Accordion() {
    return (
        <div>
            <h3>Menu</h3>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </div>
    )
}

export default App;
