import React, {useState} from "react";

type PropsType = {
    //on: boolean
}


export function OnOff(props: PropsType) {

    let [on, setOn] = useState(false); // Hook с инициализонным значением


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"

    };
    const OnClickOnCallBack = () => {
        setOn(true)
    }
    const OnClickOffCallBack = () => {
        setOn(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={OnClickOnCallBack}>On</div>
            <div style={offStyle} onClick={OnClickOffCallBack}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
