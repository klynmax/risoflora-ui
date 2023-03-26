import React, {useState} from 'react';
import './style.css';

type Variant = "defalt" | "square" | "rounded"
type Group = "default" | "limited" | "all"

export type AvatarProps = {
    children: React.ReactNode,
    style?: React.CSSProperties,
    variant?: Variant,
    size?: string,
    src?: any,
    alt?: string,
    notify?: boolean
    value?: number
    group?: Group,
    spacing?: boolean
}

export const Avatar = (
    {
        style,
        variant,
        size,
        src,
        alt,
        notify,
        value,
        group,
        spacing
    }: AvatarProps
) => {

    const max = 6;

    return(
        <>
        {
            group === 'limited' && (
                <div className="flex flex-row">
                    {
                        src.filter((user: any, i: any) => i < max)
                        .map((item: any) => (
                            <div className={spacing === true ? `flex-spacing flex-row` : `flex flex-row effect`}>
                                <img 
                                    style={style} 
                                    className={
                                        variant === 'square' ? `square` : 
                                        variant === 'rounded' ? `rounded` :
                                        size === 'xs' ? `image xs` :
                                        size === 'sm' ? `image sm` :
                                        size === 'md' ? `image` :
                                        size === 'lg' ? `image lg` :
                                        'image'
                                    }
                                    src={item}
                                    alt={alt}
                                />
                            </div>
                        ))
                    }
                    <div 
                        className={
                            variant === 'rounded' ? `image-group-rouded` :
                            variant === 'square' ? `image-group-square` :
                            size === 'xs' ? `image-group xs` : 
                            size === 'sm' ? `image-group sm` :
                            size === 'md' ? `image-group` :
                            size === 'lg' ? `image-group lg` :
                            `image-group`
                        }
                    >
                        <div 
                            className={
                                size === 'xs' ? `group-text-xs` :
                                size === 'sm' ? `group-text-sm` :
                                size === 'lg' ? `group-text-lg` :
                                `group-text`
                            }
                        >
                            +{src.length - max}
                        </div>
                    </div> 
                </div>
            )
        }
        { 
            group === 'all' && (
            <div className="flex flex-row">
            {
                notify === true && (
                    <div 
                        className={
                            variant === 'square' || variant === 'rounded' ? `notify-badge-square` : 
                            `notify-badge`
                        }
                    >
                        {value !== undefined && value > 99 ? '99+' : value}
                    </div>
                )
            }
            {
                src.map((item: any) => (
                    <div className={spacing === true ? `flex-spacing flex-row` : `flex flex-row effect`}>
                    <img 
                        style={style} 
                        className={
                            variant === 'square' ? `square` : 
                            variant === 'rounded' ? `rounded` :
                            size === 'xs' ? `image xs` :
                            size === 'sm' ? `image sm` :
                            size === 'md' ? `image` :
                            size === 'lg' ? `image lg` :
                            'image'
                        }
                        src={item}
                        alt={alt}
                    />
                    </div>
                ))
            }
            </div>
            )
        }
        {
            group === 'default' || group === undefined && (
                <div className="flex flex-row">
                {
                    notify === true && (
                        <div 
                            className={
                                variant === 'square' || variant === 'rounded' ? `notify-badge-square` : 
                                `notify-badge`
                            }
                        >
                            {value !== undefined && value > 99 ? '99+' : value}
                        </div>
                    )
                }
                <img 
                    style={style} 
                    className={
                        variant === 'square' ? `square` : 
                        variant === 'rounded' ? `rounded` :
                        size === 'xs' ? `image xs` :
                        size === 'sm' ? `image sm` :
                        size === 'md' ? `image` :
                        size === 'lg' ? `image lg` :
                        'image'
                    }
                    src={src}
                    alt={alt}
                />
            </div>
            )
        }
        </>
    )
}