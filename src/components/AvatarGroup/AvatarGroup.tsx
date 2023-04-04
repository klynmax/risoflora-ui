import React from 'react';
import './style2.css';

type Variant = 'circular' | 'square' | 'rounded';
// type Group = 'limited' | 'all';
type Size = 'xs' | 'sm' | 'md' | 'xl'

export type AvatarGroupProps = {
    children: React.ReactNode,
    style?: React.CSSProperties,
    variant?: Variant,
    size?: Size,
    src?: any,
    alt?: string,
    group?: boolean,
    spacing?: boolean
};

export const AvatarGroup = (
    {
        children,
        style,
        variant,
        size,
        src,
        alt,
        group,
        spacing
    }: AvatarGroupProps
) => {

    const max = 6;

    return (
        <>
            {
                group === true ? (
                <div className="flex flex-row">
                    {
                        src.filter((user: any, i: any) => i < max)
                        .map((item: any) => (
                            <div 
                                className={
                                    spacing === true ? 
                                        `flex-spacing flex-row` :
                                         `flex flex-row effect`
                                }
                            >
                                {
                                    variant === 'circular' ? (
                                        <img 
                                            style={style} 
                                            className={
                                                size === size ? `image-circular ${size}` :
                                                `image-circular`
                                            }
                                            src={item}
                                            alt={alt}
                                        />
                                    )
                                    :
                                    variant === 'square' ? (
                                        <img 
                                            style={style} 
                                            className={
                                                size === size ? `image-square ${size}` :
                                                `image-square`
                                            }
                                            src={item}
                                            alt={alt}
                                        />
                                    )
                                    :
                                    variant === 'rounded' ? (
                                        <img 
                                            style={style} 
                                            className={
                                                size === size ? `image-rounded ${size}` :
                                                'image-rounded'
                                            }
                                            src={item}
                                            alt={alt}
                                        />
                                    ) 
                                    :
                                    <img 
                                        style={style} 
                                        className={
                                            size === size ? `${size} image-circular` :
                                            `image-circular`
                                        }
                                        src={item}
                                        alt={alt}
                                    />

                                }
                            </div>
                        ))
                    }
                    {
                        variant === 'circular' ? (
                            <div 
                                style={style}
                                className={
                                    size === size ? `${size} image-group-circular` :
                                    'image-group-circular'
                                }
                            >
                                <div
                                    className={
                                        size === undefined ? 'group-text-xl' :
                                        size === size ? `group-text-${size}` :
                                        'group-text-xl'
                                    }
                                >
                                    +{src.length - max}
                                </div>
                            </div>
                        )
                        :
                        variant === 'square' ? (
                            <div 
                                style={style}
                                className={
                                    size === size ? `${size} image-group-square` :
                                    'image-group-square'
                                }
                            >
                                <div
                                    className={
                                        size === undefined ? 'group-text-xl' :
                                        size === size ? `group-text-${size}` :
                                        'group-text-xl'
                                    }
                                >
                                    +{src.length - max}
                                </div>
                            </div>
                        )
                        :
                        variant === 'rounded' ? (
                            <div 
                                style={style}
                                className={
                                    size === size ? `${size} image-group-rouded` :
                                    'image-group-rouded'
                                }
                            >
                                <div
                                    className={
                                        size === undefined ? 'group-text-xl' :
                                        size === size ? `group-text-${size}` :
                                        'group-text-xl'
                                    }
                                >
                                    +{src.length - max}
                                </div>
                            </div>
                        )
                        :
                        (
                            <div 
                                style={style}
                                className={'image-group-circular'}
                            >
                                <div
                                    className={'group-text-xl'}
                                >
                                    +{src.length - max}
                                </div>
                            </div>
                        )
                    }
                </div>
            )
            :
            (
                <div className="flex flex-row">
                    {
                        src.map((item: any) => (
                            <div 
                                className={
                                    spacing === true ? 
                                        `flex-spacing flex-row` : 
                                        `flex flex-row effect`
                                }
                            >
                                {
                                    variant === 'circular' ? (
                                        <img 
                                            style={style} 
                                            className={
                                                size === size ? `image-circular ${size}` :
                                                `image-circular`
                                            }
                                            src={item}
                                            alt={alt}
                                        />
                                    )
                                    :
                                    variant === 'square' ? (
                                        <img 
                                            style={style} 
                                            className={
                                                size === size ? `image-square ${size}` :
                                                `image-square`
                                            }
                                            src={item}
                                            alt={alt}
                                        />
                                    )
                                    :
                                    variant === 'rounded' ? (
                                        <img 
                                            style={style} 
                                            className={
                                                size === size ? `image-rounded ${size}` :
                                                'image-rounded'
                                            }
                                            src={item}
                                            alt={alt}
                                        />
                                    ) 
                                    :
                                    <img 
                                        style={style} 
                                        className={
                                            size === size ? `${size} image-circular` :
                                            `image-circular`
                                        }
                                        src={item}
                                        alt={alt}
                                    />

                                }
                            </div>
                        ))
                    }
                </div>
            )
        }
        </>
    )
}