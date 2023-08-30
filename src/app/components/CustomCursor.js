import React from "react";


export default function CustomCursor(props) {
    let id = "linkCursor";
    if(props.id != null){
        id = props.id;
    }
    return (
        <div
            id={id}
            onMouseLeave={() => {
                hideCustomCursor();
            }}
        >
            <span>{props.cursorText}</span>
        </div>
    );
}

export function showCustomCursor(props) {
    let id = "linkCursor";

    if(props.id != null){
        id = props.id;
    }

    const linkCursor = document.getElementById(id);
    if (linkCursor != null) {
        const x = (props.e.clientX - (linkCursor.clientWidth / 2));
        const y = (props.e.clientY - (linkCursor.clientHeight / 2));
        linkCursor.style.transform = "translate(" + x + "px, " + y + "px)";
        linkCursor.style.display = "block";
        linkCursor.style.opacity = 1;
        linkCursor.style.transition = "all" + "0.1s" + "ease-in";
    }
    return null;
}

export function hideCustomCursor(props) {
    let id = "linkCursor";
    if(props != null){
        id = props;
    }
    const linkCursor = document.getElementById(id);
    linkCursor.style.opacity = 0;
    linkCursor.style.transition = "all" + "1.3s" + "ease-out";
}
