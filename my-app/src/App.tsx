import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {ControledRating, RatingValueType} from "./components/Rating/ControledRating";
import {ControledAccordion} from "./components/Accordion/ControledAccordion";


// Function declaration
function App(props: any) {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
            <div>
                {/*<OnOff />*/}
                {/*<OnOff />*/}
                {/*<OnOff />*/}
                {/*<PageTitle title={"Hello"}/>*/}
                {/*<PageTitle title={"USER"}/>*/}
                {/*<Accordion titlevalue={"Menu"}/>*/}
                {/*<Accordion titlevalue={"Menu2"}/>*/}
                {/*<Rating />*/}
                {/*<ControledRating value={ratingValue} onClick={setRatingValue}/>*/}
                <ControledAccordion titlevalue={'Menu'} colap={accordionCollapsed}
                                    onChange={() => {setAccordionCollapsed(!accordionCollapsed)}} />
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
