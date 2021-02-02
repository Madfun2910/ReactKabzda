import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";


// Function declaration
function App(props: any) {

    return (
            <div>
                <OnOff />
                <OnOff />
                <OnOff />
                {/*<PageTitle title={"Hello"}/>*/}
                {/*<PageTitle title={"USER"}/>*/}
                <Accordion titlevalue={"Menu"}/>
                <Accordion titlevalue={"Menu2"}/>
                <Rating />
                {/*<Rating value={1}/>*/}
                {/*<Rating value={2}/>*/}
                {/*<Rating value={3}/>*/}
                {/*<Rating value={4}/>*/}
                {/*<Rating value={5}/>*/}
            </div>
    );
}
type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>
            {props.title}
        </h1>
    )
}





export default App;
