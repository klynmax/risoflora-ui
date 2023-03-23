import React from "react";
import "./item.css";

export interface GridProps {
    name?: string;
}

export default function ResponsiveItem(props: GridProps) {
    return (
        <div className="responsive-item">
            <div className="text">{props.name}</div>
        </div>
    )
}