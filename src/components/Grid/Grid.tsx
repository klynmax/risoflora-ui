import React, { CSSProperties } from "react";
import './style.css'

type JustifyItems =
 | "flex-start" 
 | "flex-end" 
 | "center" 
 | "space-between" 
 | "space-around" 
 | "space-evenly"

type FlexDirectionItems =
| "row" 
| "row-reverse" 
| "column" 
| "column-reverse"

type AlignItems = 
| "stretch" 
| "center" 
| "start" 
| "end"

/**
 * Testar a possibilidade de ter esse array para melhorar as condições
 */
// type GridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridProps = {
    children: React.ReactNode,
    spacing?: number,
    justify?: JustifyItems,
    flexDirection?:FlexDirectionItems,
    alignItems?: AlignItems,
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    style?: CSSProperties
}

export const Grid = (
    {
        children,
        spacing, 
        justify,
        flexDirection,
        alignItems,
        xs,
        sm,
        md,
        lg,
        xl,
        style
    }: GridProps) => {

    const config: CSSProperties = {};

    spacing && (config.gap = spacing);
    justify && (config.justifyContent = justify);
    flexDirection && (config.flexDirection = flexDirection);
    alignItems && (config.alignItems = alignItems);

    return(
        <div 
            style={style || config} 
            className={
                xs === 1 || sm === 1 || md === 1 || lg === 1 || xl === 1 ? `flex flex-row sm-1` : 
                xs === 2 || sm === 2 || md === 2 || lg === 2 || xl === 2 ? `flex flex-row sm-2` :
                xs === 3 || sm === 3 || md === 3 || lg === 3 || xl === 3 ? `flex flex-row sm-3` :
                xs === 4 || sm === 4 || md === 4 || lg === 4 || xl === 4 ? `flex flex-row sm-4` :
                xs === 5 || sm === 5 || md === 5 || lg === 5 || xl === 5 ? `flex flex-row sm-5` :
                xs === 6 || sm === 6 || md === 6 || lg === 6 || xl === 6 ? `flex flex-row sm-6` :
                xs === 7 || sm === 7 || md === 7 || lg === 7 || xl === 7 ? `flex flex-row sm-7` :
                xs === 8 || sm === 8 || md === 8 || lg === 8 || xl === 8 ? `flex flex-row sm-8` :
                xs === 9 || sm === 9 || md === 9 || lg === 9 || xl === 9 ? `flex flex-row sm-9` :
                xs === 10 || sm === 10 || md === 10 || lg === 10 || xl === 10 ? `flex flex-row sm-10` :
                xs === 11 || sm === 11 || md === 11 || lg === 11 || xl === 11 ? `flex flex-row sm-11` :
                xs === 12 || sm === 12 || md === 12 || lg === 12 || xl === 12 ? `flex flex-row sm-12` :
                `flex flex-row sm-auto`
            }
        >
            {children}
        </div>
    )
}