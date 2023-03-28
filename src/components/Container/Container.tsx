import React from 'react'
import './style.css';

export type ContainerProps = {
    children: React.ReactNode,
    style?: React.CSSProperties,
    maxWidth?: string
};

export const Container = (
    {
        children,
        style,
        maxWidth
    }: ContainerProps) => {

        return (
            <div
                style={style}
                className={
                    maxWidth === "xs" ? `xs` :
                    maxWidth === "sm" ? `sm` :
                    maxWidth === "md" ? `md` :
                    maxWidth === "lg" ? `lg` :
                    maxWidth === "xl" ? `xl` :
                    "container"
                }
            >
                {children}
            </div>
        )
    }