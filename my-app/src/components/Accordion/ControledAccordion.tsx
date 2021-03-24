import React from "react";

type AccordionPropsType = {
    titlevalue: string
    colap:boolean
    onChange: () => void
}

export function ControledAccordion(props: AccordionPropsType) {



    return <div>
        <AccordionTitle title={props.titlevalue}
                        onChange={props.onChange}/>
        {!props.colap && <AccordionBody/> }
    </div>

}

type  AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
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