import  React from 'react'
import "./item.css";

export interface GridProps {
    name?: string;
    style?: React.CSSProperties
}

export default function Item(props: GridProps) {
    return (
        <div className="item">
            <div style={props.style} className="text">{props.name}</div>
        </div>
    )
}