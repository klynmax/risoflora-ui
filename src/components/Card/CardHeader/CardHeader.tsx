import React from 'react';
import './style.css';

export type CardHeaderProps = {
    children: React.ReactNode,
    style?: React.CSSProperties,
    avatar?: React.ReactNode,
    title?: string,
    subheader?: string
};

export const CardHeader = (
    {
        // children,
        style,
        avatar,
        title,
        subheader
    }: CardHeaderProps
) => {
    return (
        <div
            style={style}
            className="card-header"
        >
            {avatar ? <div>{avatar}</div> : ''}
            <div className='text-container'>
                {title ? <text className="title-card">{title}</text> : ''}
                {subheader? <text className="subheader-card">{subheader}</text> : ''}
            </div>
        </div>
    )
}