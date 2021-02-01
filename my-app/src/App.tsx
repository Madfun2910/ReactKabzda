import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


// Function declaration
function App() {

    return (
            <div>
                {/*<PageTitle title={"Hello"}/>*/}
                {/*<PageTitle title={"USER"}/>*/}

                <Accordion titlevalue={"Menu"} collapsed={true}/>
                <Accordion titlevalue={"Menu2"} collapsed={false}/>

                <Rating value={0}/>
                <Rating value={1}/>
                <Rating value={2}/>
                <Rating value={3}/>
                <Rating value={4}/>
                <Rating value={5}/>
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
