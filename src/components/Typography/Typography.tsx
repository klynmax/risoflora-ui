import React from 'react';
import './style.css';

type Variant = 
| 'h1' 
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'subtitle1'
| 'subtitle2'
| 'body1'
| 'body2'
| 'button'
| 'caption'
| 'overline';

export type TypographyProps = {
    children: React.ReactNode,
    style?: React.CSSProperties,
    variant?: Variant
};

export const Typography = (
    {
        children,
        style,
        variant
    }: TypographyProps
) => {

    return (
        <>
            <text
                style={style}
                className={
                    variant === `${variant}` ? `${variant}` : `body1` 
                }
            >
                {children}
            </text>
        </>
    )
}