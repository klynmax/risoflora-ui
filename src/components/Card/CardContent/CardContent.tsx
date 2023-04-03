import React, { Children } from 'react';
import './style.css';

export type CardContentProps = {
    children: React.ReactNode,
    style?: React.CSSProperties,
};

export const CardContent = (
    {
        children,
        style
    }: CardContentProps
) => {
    return (
        <div
            style={style}
            className="card-content"
        >
            {children}
        </div>
    )
}