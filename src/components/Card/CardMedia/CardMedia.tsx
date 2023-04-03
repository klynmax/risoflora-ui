import React from 'react';
import './style.css';

export type CardMediaProps = {
    children: React.ReactNode,
    style?: React.CSSProperties,
    src?: string,
    alt?: string,
    imageTop?: boolean
};

export const CardMedia = (
    {
        children,
        style,
        src,
        alt,
        imageTop
    }: CardMediaProps
) => {
    return(
        <div
            style={style}
            className={imageTop === true ? `card` :`image-card`}
        >
            <img 
                className={imageTop === true ? `image-card-border` :`image-card`}
                style={style} src={src} alt={alt} 
            />
        </div>
    )
}