import React from 'react';
import './style.css';

type Variant = 'circular' | 'square' | 'rounded';
type Size = 'xs' | 'sm' | 'md' | 'xl'

export type AvatarProps = {
    children: React.ReactNode,
    style?: React.CSSProperties,
    variant?: Variant,
    size?: Size,
    src?: any,
    alt?: string,
    notify?: boolean
    value?: number
};

export const Avatar = (
    {
        style,
        variant,
        size,
        src,
        alt,
        notify,
        value
    }: AvatarProps
) => {

    return(
        <div className="flex flex-row">
            {
                notify === true && variant === 'circular' && (
                    <div 
                        className={
                            size === 'xs' ? '' :
                            size === 'sm' ? `notify-badge-sm` :
                            size === 'md' ? `notify-badge-md` :
                            'notify-badge'
                        }
                        >
                            {
                                size === 'xs' ? '' :
                                value !== undefined && value > 99 ? '99+' : value
                            }
                    </div>
                )
                }
                {
                    notify === true && variant === 'square' && (
                        <div 
                            className={
                                size === 'xs' ? '' :
                                size === 'sm' ? `notify-badge-square-sm` :
                                size === 'md' ? `notify-badge-square-md` :
                                size === 'xl' ? `notify-badge-square-xl` :
                                'notify-badge'
                            }
                            >
                                {
                                    size === 'xs' ? '' :
                                    value !== undefined && value > 99 ? '99+' : value
                                }
                        </div>
                    )
                }
                {
                    notify === true && variant === 'rounded' && (
                        <div 
                            className={
                                size === 'xs' ? '' :
                                size === 'sm' ? `notify-badge-square-sm` :
                                size === 'md' ? `notify-badge-square-md` :
                                size === 'xl' ? `notify-badge-square-xl` :
                                'notify-badge'
                            }
                            >
                                {
                                    size === 'xs' ? '' :
                                    value !== undefined && value > 99 ? '99+' : value
                                }
                        </div>
                    )
                }
                {
                    variant === 'circular' ? (
                        <img 
                            style={style}
                            className={
                                size === size ? `image-circular ${size}`:
                                `image-circular`
                            }
                            src={src}
                            alt={alt}
                        />
                    )
                    :
                    variant === 'square' ? (
                        <img 
                            style={style}
                            className={
                                size === size ? `image-square ${size}`:
                                `image-square`
                            }
                            src={src}
                            alt={alt}
                        />
                    )
                    :
                    variant === 'rounded' ? (
                        <img 
                            style={style}
                            className={
                                size === size ? `image-rounded ${size}`:
                                `image-rounded`
                            }
                            src={src}
                            alt={alt}
                        />
                    )
                    :
                    (
                        <img 
                            style={style}
                            className="image-circular"
                            src={src}
                            alt={alt}
                        />
                    )
                }
            </div>
    )
}