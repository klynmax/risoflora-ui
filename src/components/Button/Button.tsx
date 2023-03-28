import React from 'react';
import './style.css';

type Variant = 'text' | 'contained' | 'outlined';
type Size = 'small' | 'medium' | 'large';
type Color = 'blue' | 'red' | 'orange' | 'yellow' | 'green' | 'cyan' | 'violet';

export type ButtonProps = {
    children: React.ReactNode,
    style?: React.CSSProperties
    onClick?: () => void,
    variant?: Variant,
    size?: Size,
    disabled?: boolean
    color?: Color,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode
};

export const Button = (
    {
        style,
        children,
        variant,
        onClick,
        size,
        disabled,
        color,
        startIcon,
        endIcon
    }: ButtonProps
) => {

    return (
        <>
            {
                variant === "contained" && (
                    <button 
                        className={
                            size === "small" ? `button-contained small-btn` :
                            size === "medium" ? `button-contained medium-btn` :
                            size === "large" ? `button-contained large-btn` :
                            color === "red" ? `button-contained button-red` :
                            color === "orange" ? `button-contained button-orange` :
                            color === "yellow" ? `button-contained button-yellow` :
                            color === "green" ? `button-contained button-green` :
                            color === "cyan" ? `button-contained button-cyan` :
                            color === "blue" ? `button-contained button-blue` :
                            color === "violet" ? `button-contained button-violet` :
                            `button-contained`
                        }
                        style={style}
                        onClick={onClick}
                        disabled={disabled}
                        color={color}
                    >
                        {startIcon ? <span className="start-icon" >{startIcon}</span> : null}
                        {children}
                        {endIcon ? <span className="end-icon" >{endIcon}</span> : null}
                    </button>
                )
            }
            {
                variant === "outlined" && (
                    <button 
                        className={
                            size === "small" ? `button-outlined small-btn` :
                            size === "medium" ? `button-outlined medium-btn` :
                            size === "large" ? `button-outlined large-btn` :
                            color === "red" ? `button-outlined button-outlined-red` :
                            color === "orange" ? `button-outlined button-outlined-orange` :
                            color === "yellow" ? `button-outlined button-outlined-yellow` :
                            color === "green" ? `button-outlined button-outlined-green` :
                            color === "cyan" ? `button-outlined button-outlined-cyan` :
                            color === "blue" ? `button-outlined button-outlined-blue` :
                            color === "violet" ? `button-outlined button-outlined-violet` :
                            `button-outlined`
                        }
                        style={style}
                        onClick={onClick}
                        disabled={disabled}
                    >
                        {startIcon ? <span className="start-icon" >{startIcon}</span> : null}
                        {children}
                        {endIcon ? <span className="end-icon" >{endIcon}</span> : null}
                    </button>
                )
            }
            {
                variant === "text" && (
                    <button 
                        className={
                            size === "small" ? `button-text-style small-btn` :
                            size === "medium" ? `button-text-style medium-btn` :
                            size === "large" ? `button-text-style large-btn` :
                            color === "red" ? `button-text-style button-text-red` :
                            color === "orange" ? `button-text-style button-text-orange` :
                            color === "yellow" ? `button-text-style button-text-yellow` :
                            color === "green" ? `button-text-style button-text-green` :
                            color === "cyan" ? `button-text-style button-text-cyan` :
                            color === "blue" ? `button-text-style button-text-blue` :
                            color === "violet" ? `button-text-style button-text-violet` :
                            `button-text-style`
                        }
                        style={style}
                        onClick={onClick}
                        disabled={disabled}
                    >
                        {startIcon ? <span className="start-icon" >{startIcon}</span> : null}
                        {children}
                        {endIcon ? <span className="end-icon" >{endIcon}</span> : null}
                    </button>
                )
            }
            {
                variant === undefined && (
                    <button 
                        className={
                            size === "small" ? `button-contained small-btn` :
                            size === "medium" ? `button-contained medium-btn` :
                            size === "large" ? `button-contained large-btn` :
                            color === "red" ? `button-contained button-red` :
                            color === "orange" ? `button-contained button-orange` :
                            color === "yellow" ? `button-contained button-yellow` :
                            color === "green" ? `button-contained button-green` :
                            color === "cyan" ? `button-contained button-cyan` :
                            color === "blue" ? `button-contained button-blue` :
                            color === "violet" ? `button-contained button-violet` :
                            `button-contained`
                        }
                        style={style}
                        onClick={onClick}
                        disabled={disabled}
                        color={color}
                    >
                        {startIcon ? <span className="start-icon" >{startIcon}</span> : null}
                        {children}
                        {endIcon ? <span className="end-icon" >{endIcon}</span> : null}
                    </button>
                )
            }
        </>
    );
}