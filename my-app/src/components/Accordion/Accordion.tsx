import React, {useState} from "react";

type AccordionPropsType = {
    titlevalue: string
}

export function Accordion(props: AccordionPropsType) {

    const [colap, setColap] = useState(false)


    return <div>
        <AccordionTitle title={props.titlevalue} setColap={ () => {setColap(!colap)}}/>
        {colap && <AccordionBody/> }
    </div>

}

type  AccordionTitlePropsType = {
    title: string
    setColap: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={ () => {props.setColap()}}>{props.title}</h3>
    )
}


function AccordionBody() {
    return (
        <ul>
            <li> 1</li>
            <li> 2</li>
            <li> 3</li>
        </ul>
    )
}