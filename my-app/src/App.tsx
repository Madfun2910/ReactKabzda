import React from 'react';
import './App.css';


// Function declaration
function App() {

    return (
        <div className="App">
            <div>
                <Title/>
                <Rating/>
                <Accordion/>
                <Rating/>
            </div>
        </div>
    );
}

function Title() {
    return (
        <div>This is APP</div>
    )
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

function Star() {
    return (
        <div>star</div>
    )
}

function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>

        </div>
    )
}

function AccordionTitle() {
    return (
        <h3>Menu</h3>
    )
}

function AccordionBody() {
    return (
        <div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </div>
    )
}

export default App;
