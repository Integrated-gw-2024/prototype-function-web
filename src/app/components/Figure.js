import React, { useState, useRef } from "react";

let moveMode = false;

export default function Figure({col,children}) {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const circleRef = useRef(null);
    const initialPosition = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        initialPosition.current = { x: e.clientX, y: e.clientY };

        moveMode = true;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        moveMode = false;
    };

    const handleMove = (e) => {
        if (moveMode == true) {
            const offsetX = e.clientX - initialPosition.current.x;
            const offsetY = e.clientY - initialPosition.current.y;

            console.log(e.clientX, e.clientY);

            setPosition((prevPosition) => ({
                x: prevPosition.x + offsetX,
                y: prevPosition.y + offsetY,
            }));

            initialPosition.current = { x: e.clientX, y: e.clientY };
        }
    };

    return (
        <div
            className="draggable-circle-container"
            onMouseMove={handleMove}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        >
            <div
                className={`collision ${isDragging ? "dragging" : ""}`}
                style={{
                    backgroundColor: `${col}`,
                }}
                ref={circleRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                <div className={`draggable-circle`}>
                    {children}
                </div>
            </div>
        </div>
    );
}
