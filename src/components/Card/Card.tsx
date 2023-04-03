import React from 'react';
import './style.css';

type Variant = 
| 'outlined'
| 'shadow'

type Color = 'blue' | 'red' | 'orange' | 'yellow' | 'green' | 'cyan' | 'violet';

export type CardProps = {
    title: string,
    description: string,
    children: React.ReactNode,
    cont: React.ReactNode,
    style?: React.CSSProperties,
    variant?: Variant
    color?: Color
};
  
export const Card = (
    { 
        title, 
        description,
        children,
        style,
        variant,
        color
    }: CardProps
) => {
    return (
        <div 
            style={style} 
            className={
                variant === 'outlined' ? `card-container-outlined ${color}`:
                 `card-container ${color}`
            }
        >
            {children}
        </div>
    );
};