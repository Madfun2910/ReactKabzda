import React from "react";

type AccordionPropsType = {
    titlevalue: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    if (props.collapsed === true) {
        return <AccordionTitle title={props.titlevalue}/>
    }
    return (
        <div>
            <AccordionTitle title={props.titlevalue}/>
            <AccordionBody/>
        </div>

    )
}






type  AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
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