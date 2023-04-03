import React from 'react';
import './style.css';

export type CardActionProps = {
    children: React.ReactNode,
    style?: React.CSSProperties
};

export const CardAction = (
    {
        children,
        style
    }: CardActionProps
) => {
    return(
        <div
            style={style}
            className="card-action"
        >
            {children}
        </div>
    )
}