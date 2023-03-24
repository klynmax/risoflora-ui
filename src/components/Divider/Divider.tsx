import React from 'react';
import './style.css'

export type DividerProps = {
    style?: React.CSSProperties,
    name?: string,
    horizontal?: boolean
};

export const Divider = (
    {
        name,
        style,
        horizontal
    }: DividerProps
) => {

    return (
        <div 
            style={style}
            className={
                name ? `separator` :
                horizontal === true ? `separatorVertical` :
                `root`
            }
        >
            {name}
        </div>
    )
}